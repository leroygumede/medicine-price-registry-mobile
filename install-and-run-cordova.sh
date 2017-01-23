#!/bin/bash

THIS_SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# load bash utils
source "${THIS_SCRIPT_DIR}/bash_utils/formatted_output.sh"

# locations of various tools
GIT=git
CURL=curl
NODE_JS=nodejs
NPM=npm
CORDOVA=cordova

tool_not_found() {
  echo "Could not find $1 tool, please check settings"
  exit 1
}

verify_tools() {
	# Check 'curl' tool
	${CURL} --help >/dev/null
	if [ $? -ne 0 ]; then
    tool_not_found ${CURL}
	fi

  # Check 'git' tool
  ${GIT} --help >/dev/null
  if [ $? -ne 0 ]; then
    tool_not_found ${GIT}
  fi

  # Check 'nodejs' tool
  ${NODE_JS} --help >/dev/null
  if [ $? -ne 0 ]; then
    tool_not_found ${NODE_JS}
  fi

  # Check 'npm' tool
  ${NPM} -v >/dev/null
  if [ $? -ne 0 ]; then
    tool_not_found ${NPM}
  fi

  # Check 'cordova' tool
  ${CORDOVA} --help >/dev/null
  if [ $? -ne 0 ]; then
    tool_not_found ${CORDOVA}
  fi
}

# before even going on, make sure all tools work
verify_tools

# check cordova parameters
if [ -z "${cordova_command}" ] ; then
    printf "\e[31mcordova_command was not defined\e[0m\n"
    exit 1
fi

if [ -z "${platform_name}" ] ; then
    printf "\e[31mplatform_name was not defined\e[0m\n"
    exit 1
fi

# print installed cordova platforms
cordova platforms ls

# execute cordova task
cordova ${cordova_command} ${platform_name} ${build_options}
return_code=$?

exit ${return_code}
