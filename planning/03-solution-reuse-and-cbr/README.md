# Milestone 3: Solution Reuse via Case-Based Reasoning (CBR)

**Goal:** Implement the core reasoning cycle that allows the agent to learn from experience by finding and adapting past solutions for new problems.

**Motivation:** Instead of solving every problem from scratch, the agent should become more efficient and reliable over time by reusing proven solutions. This mirrors how human experts work, leveraging past successes to solve new challenges faster and more effectively.

**Key Tasks:**

- **Implement the Retrieve Phase:** Use the vector store to find similar past problems, fetch their corresponding workflow graphs, and use an LLM to verify the relevance of the match.
- **Implement the Reuse Phase:** Develop logic to adapt a retrieved workflow to the new problem's specific parameters, potentially using an LLM for guidance on more complex adaptations.
- **Implement the Revise Phase:** Execute the adapted plan in a sandboxed environment, monitor for errors, and use an LLM to analyze any failures and propose repairs to the workflow graph.
- **Implement the Retain Phase:** After a problem is successfully solved, store the new solution (as a new case) by creating a new `:Intent` node, adding the workflow to the graph, and saving its vector to the database.

**Considerations:**

- **Solution Adaptation:** The "Reuse" phase is non-trivial. Logic must be developed to distinguish between simple parameter changes and complex structural adaptations that require LLM intervention.
- **Revision Loop:** The "Revise" phase forms a critical self-correction loop. This process must be carefully designed to avoid infinite loops and to ensure that proposed fixes are sound.
- **Sandboxing:** All workflow executions must be securely sandboxed to prevent unintended side effects on the host system, especially when executing code or shell commands.
