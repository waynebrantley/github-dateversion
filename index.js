const core = require('@actions/core')

try {
    const { GITHUB_REF, GITHUB_RUN_NUMBER } = process.env
    const releaseBranch = core.getInput('release-branch')
    const today = new Date()
    const localVersion = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}.${GITHUB_RUN_NUMBER}`
    const branch = /[^/]*$/.exec(GITHUB_REF)[0]
    core.info(branch)
    core.info(releaseBranch)
    if (branch == releaseBranch)
        core.setOutput('version', localVersion)
    else
        core.setOutput('version', `${localVersion}-${branch.substring(0, 20)}`)
} catch (error) {
    core.setFailed(error.message)
}
