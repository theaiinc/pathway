import { ContextPass, passId } from './pass.js';

export class PassRegistry {
  private readonly passes = new Map<string, ContextPass>();

  register(pass: ContextPass): void {
    const id = passId(pass);
    if (this.passes.has(id)) {
      throw new Error(`Context pass already registered: ${id}`);
    }
    this.passes.set(id, pass);
  }

  get(id: string): ContextPass | undefined {
    return this.passes.get(id);
  }

  list(): ContextPass[] {
    return Array.from(this.passes.values()).sort((a, b) =>
      passId(a).localeCompare(passId(b))
    );
  }

  version(): string {
    return this.list()
      .map(passId)
      .join('|');
  }
}
