# Hello world javascript action

This action calculates a version based on the date.  
yyyy.mm.d.buildnumber
if not off 'master' then it will be yyyy.mm.d.buildnumber-branch

## Inputs

## `release-branch`

Name of the release branch - defaults to `"master"`.

## Outputs

## `version`

The version that was calculated.

## Example usage

```yaml
- name: calculate version
  uses: waynebrantley/github-dateversion@v1
  with:
    release-branch: 'main'
```
