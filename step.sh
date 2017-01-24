#!/bin/bash

THIS_SCRIPTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

bash "${THIS_SCRIPTDIR}/install-and-run-cordova.sh"
exit $?
