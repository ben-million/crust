# Spigot

Spigot is a small desktop interface for the [Pi agent harness](https://pi.dev). It provides a focused conversation buffer, a prompt, and direct access to shell commands without trying to become an editor, terminal emulator, or general-purpose IDE.

The interface is written in Rust with Dioxus and communicates with Pi's Node.js SDK over a plain JSONL stream. It reuses Pi's existing credentials and configuration, works in a chosen project directory, and keeps the conversation in memory only for the lifetime of the app.

## Aim

Spigot aims to make working with coding agents simple, clear, and frugal. It should do a few useful things predictably, remain easy to understand and change, and use no more code, dependencies, or resources than necessary.

It favors direct interfaces over layers of abstraction, existing local tools over duplicate systems, and a small coherent feature set over endless configurability. New features must justify the complexity they introduce; removing unnecessary code is an improvement.

The goal is not maximum functionality. It is a useful tool that stays useful by staying small.

These aims are informed by the [suckless.org philosophy](https://suckless.org/philosophy/).
