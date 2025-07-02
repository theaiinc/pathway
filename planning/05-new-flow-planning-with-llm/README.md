# Milestone 5: New Flow Planning with LLM

**Goal:** For novel problems where no existing solution can be reused, generate a new, executable workflow graph using a Large Language Model and a structured planning framework.

**Motivation:** An agent that can only reuse past solutions is limited by its experience. To be truly intelligent, it must be able to reason about entirely new problems and create new plans from first principles. This capability ensures the agent can handle a virtually limitless range of tasks.

**Key Tasks:**

- **Integrate LangGraph:** Set up the LangGraph framework to orchestrate LLM calls and tool executions in a graph-based agent. Define the shared state object for the planning graph.
- **Design the Planner Agent:** Build a specialized agent in LangGraph with a prompt that instructs the LLM to decompose a high-level goal into a structured plan (e.g., JSON) that matches our graph database schema.
- **Implement Plan Ingestion:** Create the logic to parse the structured output from the LangGraph planner and translate it into a new subgraph in our main workflow graph database.
- **Implement Re-planning Loop:** If a newly generated plan fails during execution, feed the error context back into the planner agent to generate a revised plan, creating a robust plan-execute-correct loop.

**Considerations:**

- **Structured Output:** The reliability of this milestone depends heavily on the LLM's ability to consistently generate well-formatted, structured output (like JSON). We will need robust prompting and parsing/validation logic.
- **Hallucination and Grounding:** The LLM might invent non-existent tools or produce illogical steps. The planner must be "grounded" by providing it with a clear list of available tools and capabilities.
- **Plan Complexity:** For very complex problems, a single LLM call may not be enough. We may need to design a hierarchical planning process where the LLM first creates a high-level plan and then recursively fleshes out the details of each step.
