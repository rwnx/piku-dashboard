# Changelog
This document lists the changes between release versions.

These are user-facing changes. To see the changes in the code between versions you can compare git tags.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Types of changes
  * `Added` for new features.
  * `Changed` for changes in existing functionality.
  * `Deprecated` for soon-to-be removed features.
  * `Removed` for now removed features.
  * `Fixed` for any bug fixes.
  * `Security` in case of vulnerabilities.

  -------------------------------------------------------------------
## [Unreleased]
### Changed
* Stop & Destroy actions will no longer be shown for the dashboard application.
* Removed Config env SELF_APP NAME. App will now self-detect dashboard application id from the directory name.
### Added
* A way to add new config
* piku-dashboard will now check it's own version against the latest available version at https://github.com/rwnx/piku-dashboard, and display a "New Version" Link if one is available
