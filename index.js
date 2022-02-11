const core = require('@actions/core')

try {
    const { GITHUB_REF, GITHUB_RUN_NUMBER } = process.env
    const releaseBranch = core.getInput('release-branch')
    const today = new Date()
    const localVersion = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDay()}.${GITHUB_RUN_NUMBER}`
    const branch = /[^/]*$/.exec(GITHUB_REF)[0]
    if (branch == releaseBranch)
        core.setOutput('version', localVersion)
    core.setOutput('version', `${localVersion}-${branch.substring(0, 20)}`)
} catch (error) {
    core.setFailed(error.message)
}