# Zim Configuration - zshrc

```shell=
# Start configuration added by Zim install {{{
#
# User configuration sourced by interactive shells
#

# -----------------------------
# Zsh Configuration
# -----------------------------

# -----------------
# History Settings
# -----------------

# Remove older commands from history if a duplicate is added.
setopt HIST_IGNORE_ALL_DUPS

# -----------------
# Input/Output
# -----------------

# Set the default keymap for the editor to emacs (`-e`) or vi (`-v`).
bindkey -e

# Uncomment to prompt for spelling correction of commands.
# setopt CORRECT

# Uncomment to customize the spelling correction prompt.
# SPROMPT='zsh: correct %F{red}%R%f to %F{green}%r%f [nyae]? '

# Remove path separator from WORDCHARS to treat slashes as word boundaries.
WORDCHARS=${WORDCHARS//[\/]}

# -----------------
# Zim Configuration
# -----------------

# Uncomment to use degit instead of git as the default tool to install and update modules.
# zstyle ':zim:zmodule' use 'degit'

# --------------------
# Module Configuration
# --------------------

# -----------------
# Git Module
# -----------------

# Set a custom prefix for the generated git aliases. Default prefix is 'G'.
zstyle ':zim:git' aliases-prefix 'g'

# -----------------
# Input Module
# -----------------

# Append `../` to input for each `.` typed after an initial `..`.
zstyle ':zim:input' double-dot-expand yes

# -----------------
# Terminal Title
# -----------------

# Set a custom terminal title format using prompt expansion escape sequences.
# See: http://zsh.sourceforge.net/Doc/Release/Prompt-Expansion.html#Simple-Prompt-Escapes
# Default format is '%n@%m: %~'.
# zstyle ':zim:termtitle' format '%1~'


zstyle ':zim:k' aliases-prefix 'K'

# -----------------
# zsh-autosuggestions
# -----------------

# Disable automatic widget re-binding on each precmd.
# Set this if zsh-users/zsh-autosuggestions is the last module in your ~/.zimrc.
ZSH_AUTOSUGGEST_MANUAL_REBIND=1

# Uncomment to customize the style of the suggestions.
# See: https://github.com/zsh-users/zsh-autosuggestions/blob/master/README.md#suggestion-highlight-style
# ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=242'

# -----------------
# zsh-syntax-highlighting
# -----------------

# Set which highlighters will be used.
# See: https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters.md
ZSH_HIGHLIGHT_HIGHLIGHTERS=(main brackets)

# Uncomment to customize the main highlighter styles.
# See: https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/docs/highlighters/main.md#how-to-tweak-it
# typeset -A ZSH_HIGHLIGHT_STYLES
# ZSH_HIGHLIGHT_STYLES[comment]='fg=242'

# ------------------
# Initialize Zim Modules
# ------------------

ZIM_HOME=${ZDOTDIR:-${HOME}}/.zim

# Download zimfw plugin manager if missing.
if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
  if (( ${+commands[curl]} )); then
    curl -fsSL --create-dirs -o ${ZIM_HOME}/zimfw.zsh \
        https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
  else
    mkdir -p ${ZIM_HOME} && wget -nv -O ${ZIM_HOME}/zimfw.zsh \
        https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
  fi
fi

# Install missing modules and update ${ZIM_HOME}/init.zsh if missing or outdated.
if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZDOTDIR:-${HOME}}/.zimrc ]]; then
  source ${ZIM_HOME}/zimfw.zsh init -q
fi

# Initialize modules.
source ${ZIM_HOME}/init.zsh

# ------------------------------
# Post-Init Module Configuration
# ------------------------------

# -----------------
# zsh-history-substring-search
# -----------------

zmodload -F zsh/terminfo +p:terminfo

# Bind arrow keys manually so up/down works before and after zle-line-init.
for key ('^[[A' '^P' ${terminfo[kcuu1]}) bindkey ${key} history-substring-search-up
for key ('^[[B' '^N' ${terminfo[kcud1]}) bindkey ${key} history-substring-search-down

# Bind keys for vi mode.
for key ('k') bindkey -M vicmd ${key} history-substring-search-up
for key ('j') bindkey -M vicmd ${key} history-substring-search-down

unset key

# }}} End configuration added by Zim install

# -----------------
# p10k Configuration
# -----------------

# Disable Powerlevel10k configuration wizard.
POWERLEVEL9K_DISABLE_CONFIGURATION_WIZARD=true

# -----------------
# Environment Variables
# -----------------

# Set XDG config home.
export XDG_CONFIG_HOME="$HOME/.config"

# Prepend GNU tools to the PATH.
export PATH="/usr/local/opt/coreutils/libexec/gnubin:$PATH"

# Add asdf to PATH.
export PATH="$ASDF_DIR:$PATH"

# -----------------
# fzf Configuration
# -----------------

# Setup fzf binary path.
if [[ ! "$PATH" == */usr/local/opt/fzf/bin* ]]; then
  export PATH="${PATH:+${PATH}:}/usr/local/opt/fzf/bin"
fi

# Source fzf auto-completion script.
[[ $- == *i* ]] && source "/usr/local/opt/fzf/shell/completion.zsh" 2> /dev/null

# Source fzf key bindings script.
# source "/usr/local/opt/fzf/shell/key-bindings.zsh"

# -----------------
# Aliases
# -----------------

alias rm="rm -iv"
alias sed="gsed"
alias py="python"
alias v="nvim"
alias vim="nvim"
alias vi="vim"
alias tg="tig"
alias tm="tmux"
alias find="fd"
alias sl="ls"
alias mkdir='mkdir -pv'
alias now='date +"%T"'
alias nowdate='date +"%d-%m-%Y"'
alias ports='netstat -tulanp'
alias copy="pbcopy"
alias kc="kubectx"
alias kn="kubens"
alias tf="terraform"
alias diff="colordiff"

# -----------------
# fzf Options
# -----------------

export FZF_COMPLETION_TRIGGER='**'
export FZF_COMPLETION_OPTS='--border --info=inline'
export FZF_DEFAULT_OPTS="--height 100% --layout=reverse --preview '(highlight -O ansi {} || cat {}) 2> /dev/null | head -500'"
export FZF_DEFAULT_COMMAND='fd --type f --hidden --follow --no-ignore --exclude={.git}'

# Configure fzf Ctrl-T command.
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

# -----------------
# Network Aliases
# -----------------

alias fp="cat /etc/services | fzf"

# -----------------
# Custom Functions
# -----------------

# Custom kubectl function with logging.
function kubectl() { echo "+ kubectl $@" >&2; command kubectl $@; }

# Custom docker function with logging.
function docker() { echo "+ docker $@" >&2; command docker $@; }

# Custom terraform function with logging.
function terraform() { echo "+ terraform $@" >&2; command terraform $@; }

# Set locale.
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8


# Setup Java
export JAVA_HOME="/Users/alex.su/.asdf/shims/java"
export PATH=$JAVA_HOME/bin:$PATH

# Function to fetch and rebase from upstream.
function fetch-upstream()
{
  local default_br=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')
  git fetch upstream
  git rebase upstream/"$default_br"
  git push origin "$default_br"
}

# Function to reset the last Git commit.
back()
{
  git reset HEAD~
}


goto_gitroot()
{
    cd $(git-root)
}

git_reset()
{
    git reset --hard origin/main
}

check_sts()
{
    aws sts get-caller-identity
}

# terraform
alias tf='terraform'
alias tfa='terraform apply'
alias tfc='terraform console'
alias tfd='terraform destroy'
alias tff='terraform fmt'
alias tfg='terraform graph'
alias tfim='terraform import'
alias tfin='terraform init'
alias tfo='terraform output'
alias tfp='terraform plan'
alias tfpr='terraform providers'
alias tfr='terraform refresh'
alias tfsh='terraform show'
alias tft='terraform taint'
alias tfut='terraform untaint'
alias tfv='terraform validate'
alias tfw='terraform workspace'
alias tfs='terraform state'
alias tffu='terraform force-unlock'
alias tfwst='terraform workspace select'
alias tfwsw='terraform workspace show'
alias tfssw='terraform state show'
alias tfwde='terraform workspace delete'
alias tfwls='terraform workspace list'
alias tfsls='terraform state list'
alias tfwnw='terraform workspace new'
alias tfsmv='terraform state mv'
alias tfspl='terraform state pull'
alias tfsph='terraform state push'
alias tfsrm='terraform state rm'
alias tfay='terraform apply -auto-approve'
alias tfdy='terraform destroy -auto-approve'
alias tfinu='terraform init -upgrade'
alias tfpde='terraform plan --destroy'

# function to list all the profiles in ~/.aws/config
function aws_profiles() {
  profiles=$(aws --no-cli-pager configure list-profiles 2> /dev/null)
  if [[ -z "$profiles" ]]; then
    echo "No AWS profiles found in '$HOME/.aws/config, check if ~/.aws/config exists and properly configured.'"
    return 1
  else
    echo $profiles
  fi
}

# function to set AWS profile, sso login and clear the profile
function asp() {
  available_profiles=$(aws_profiles)
  if [[ -z "$1" ]]; then
    unset AWS_DEFAULT_PROFILE AWS_PROFILE
    echo "Zero argument provided, AWS profile cleared."
    return
  fi

  echo "$available_profiles" | grep -qw "$1"
  if [[ $? -ne 0 ]]; then
    echo "Profile '$1' not configured in '$HOME/.aws/config'.\n"
    echo "Available profiles: \n$available_profiles\n"
    return 1
  else
    export AWS_DEFAULT_PROFILE="$1" AWS_PROFILE="$1"
  fi
}

# function to set AWS region and clear the region
function asr() {
  if [[ -z "$1" ]]; then
    unset AWS_DEFAULT_REGION AWS_REGION
    echo "No argument provided, cleared AWS region."
    return
  else
    export AWS_DEFAULT_REGION=$1 AWS_REGION=$1
  fi
}

# function to list all the profiles
function alp() {
  aws_profiles
}

# function to update the PS1 prompt with current AWS profile and region
function aws_ps1() {
  local profile_color="%{$(tput setaf 6)%}"  # Cyan color
  local region_color="%{$(tput setaf 2)%}"   # Green color
  local reset_color="%{$(tput sgr0)%}"      # Reset color
  echo -en "($profile_color$AWS_PROFILE$reset_color:$region_color$AWS_REGION$reset_color)"
}
```