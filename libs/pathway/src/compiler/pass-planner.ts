import { ContextPass, passId } from './pass.js';

export interface PlannedPassSet {
  readonly version: string;
  readonly passes: readonly ContextPass[];
}

export class PassPlanner {
  plan(passes: readonly ContextPass[]): PlannedPassSet {
    const byName = new Map<string, ContextPass>();
    for (const pass of passes) {
      if (byName.has(pass.name)) {
        throw new Error(`Duplicate context pass name: ${pass.name}`);
      }
      byName.set(pass.name, pass);
    }

    const planned: ContextPass[] = [];
    const visiting = new Set<string>();
    const visited = new Set<string>();

    const visit = (pass: ContextPass): void => {
      if (visited.has(pass.name)) return;
      if (visiting.has(pass.name)) {
        throw new Error(`Context pass dependency cycle detected at ${pass.name}`);
      }

      visiting.add(pass.name);
      for (const dependency of [...pass.dependencies].sort()) {
        const dependencyPass = byName.get(dependency);
        if (!dependencyPass) {
          throw new Error(`Context pass ${pass.name} depends on missing pass ${dependency}`);
        }
        visit(dependencyPass);
      }
      visiting.delete(pass.name);
      visited.add(pass.name);
      planned.push(pass);
    };

    for (const pass of [...passes].sort((a, b) => passId(a).localeCompare(passId(b)))) {
      visit(pass);
    }

    return {
      version: planned.map(passId).join('|'),
      passes: planned,
    };
  }
}
