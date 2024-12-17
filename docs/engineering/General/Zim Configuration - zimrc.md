# zimrc

```shell=
# Start configuration added by Zim install {{{
#
# This file is not sourced during shell startup. It is used to configure the
# Zim framework and its plugins.
#

# --------------------------------------------------------------
# Core Modules
# --------------------------------------------------------------

# Sets sane Zsh built-in environment options.
zmodule environment
# Provides handy Git aliases and functions.
zmodule git
# Applies correct key bindings for input events.
zmodule input
# Sets a custom terminal title.
zmodule termtitle
# Adds utility aliases and functions (e.g., colored output for ls, grep, less).
zmodule utility

# --------------------------------------------------------------
# Additional Tools & Plugins
# --------------------------------------------------------------

# Plugin manager for language versions (e.g., Ruby, Node.js).
zmodule asdf
# Modern replacement for ls with more features.
zmodule exa
# Command-line fuzzy finder.
zmodule fzf
# Directory jumper with an easy-to-use interface.
zmodule rupa/z

# --------------------------------------------------------------
# Themes & Prompts
# --------------------------------------------------------------

# A fast, feature-rich, and highly customizable theme for Zsh.
zmodule romkatv/powerlevel10k --use degit
# Exposes to prompts how long the last command took to execute (used by asciiship).
zmodule duration-info
# Exposes git repository status information to prompts (used by asciiship).
zmodule git-info
# A minimal, ASCII-only prompt inspired by Spaceship and Starship.
zmodule asciiship

# --------------------------------------------------------------
# Completion & History
# --------------------------------------------------------------

# Additional completion definitions for Zsh.
zmodule zsh-users/zsh-completions --fpath src
# Enables and configures smart and extensive tab completion.
# Note: Must be sourced after all modules that add completion definitions.
zmodule completion

# --------------------------------------------------------------
# Syntax Highlighting & Suggestions
# --------------------------------------------------------------

# Fish-like syntax highlighting for Zsh.
# Note: Must be sourced after completion.
zmodule zsh-users/zsh-syntax-highlighting
# Fish-like history search (up arrow) for Zsh.
# Note: Must be sourced after zsh-syntax-highlighting.
zmodule zsh-users/zsh-history-substring-search
# Fish-like command autosuggestions for Zsh.
zmodule zsh-users/zsh-autosuggestions

# }}} End configuration added by Zim install
```