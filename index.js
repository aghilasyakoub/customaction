const core = require('@actions/core');
const github = require('@actions/github');

(
    async () => {
        try
        {
            core.notice("calling is ok")
        } 
        catch (error)
        {
            core.setFailed(error.message);
        }
    }
)();
