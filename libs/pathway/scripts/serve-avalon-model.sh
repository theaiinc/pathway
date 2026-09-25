#!/usr/bin/env bash
#
# Serve a model downloaded by Avalon through Avalon's own llama.cpp build, as
# an OpenAI-compatible endpoint for the skills benchmark.
#
#   scripts/serve-avalon-model.sh unsloth_Qwen3.5-4B-GGUF
#   PORT=8791 scripts/serve-avalon-model.sh mradermacher_Qwen3.5-2B-GPT-5.1-HighIQ-INSTRUCT-GGUF
#
# Why not Avalon's gateway on :8787: it runs llama-cli once per request, so
# every step reloads the model (7-20s) and the reply is the CLI's stdout,
# banner, echoed prompt and thinking included. An agent loop needs the model
# loaded once and only the answer back, which is what llama-server gives.
#
# Thinking is off: with it on, a small reasoning model spends each step's
# token budget thinking and never emits the action.
set -euo pipefail

MODEL_ID="${1:?usage: $0 <avalon model id>  (see ~/Library/Application Support/avalon/data/models)}"
PORT="${PORT:-8790}"
CTX="${CTX:-4096}"
AVALON_DATA="${AVALON_DATA:-$HOME/Library/Application Support/avalon/data}"

MODEL_DIR="$AVALON_DATA/models/$MODEL_ID"
[[ -d "$MODEL_DIR" ]] || { echo "No Avalon model $MODEL_ID in $AVALON_DATA/models" >&2; exit 1; }
GGUF="$(find "$MODEL_DIR" -maxdepth 1 -name '*.gguf' | head -1)"
[[ -n "$GGUF" ]] || { echo "No .gguf file in $MODEL_DIR" >&2; exit 1; }

SERVER="$(find "$AVALON_DATA/drivers" -name llama-server -type f -perm -u+x 2>/dev/null | sort | tail -1)"
[[ -n "$SERVER" ]] || { echo "No llama-server under $AVALON_DATA/drivers; install a llama.cpp driver in Avalon" >&2; exit 1; }

echo "Serving $MODEL_ID on http://127.0.0.1:$PORT/v1 with $SERVER" >&2
exec "$SERVER" -m "$GGUF" --alias "$MODEL_ID" --host 127.0.0.1 --port "$PORT" \
  -c "$CTX" -np 1 --reasoning off -ngl 99
