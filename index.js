const core = require('@actions/core')

try {
    const { GITHUB_RUN_NUMBER, GITHUB_HEAD_REF, GITHUB_REF_NAME } = process.env
    const releaseBranch = core.getInput('release-branch')
    const today = new Date()
    const localVersion = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}.${GITHUB_RUN_NUMBER}`
    
    const branchName = (GITHUB_HEAD_REF || GITHUB_REF_NAME).split('/').pop()
    core.info(branchName)
    core.info(releaseBranch)
    if (branchName === releaseBranch)
        core.setOutput('version', localVersion)
    else
        core.setOutput('version', `${localVersion}-${branchName.replace(/[^a-zA-Z0-9-]/g, '-').substring(0, 20)}`)
} catch (error) {
    core.setFailed(error.message)
}
