export const archiveActionType = {
  TO_INITED_STATE: 'To Inited State',
  GET_ARCHIVES : 'Get Archives',
  ON_GET_ARCHIVES : 'On Get Archives',
  ON_GET_ARCHIVES_FAIL : 'On Get Archives Failed',
  GET_ARCHIVE : 'Get Archive',
  ON_GET_ARCHIVE : 'On Get Archive',
  ON_GET_ARCHIVE_FAIL : 'On Get Archive Failed',
  POST_ARCHIVE : 'Post Archive',
  ON_POST_ARCHIVE : 'On Post Archive',
  ON_POST_ARCHIVE_FAIL : 'On Post Archive Failed',
  PATCH_ARCHIVE : 'Patch Archive',
  ON_PATCH_ARCHIVE : 'On Patch Archive',
  ON_PATCH_ARCHIVE_FAIL : 'On Patch Archive Failed',
  DELETE_ARCHIVE : 'Delete Archive',
  ON_DELETE_ARCHIVE : 'On Delete Archive',
  ON_DELETE_ARCHIVE_FAIL : 'On Delete Archive Failed',
};

export const TO_INITED_STATE = () => {
  return {
    type: archiveActionType.TO_INITED_STATE,
  };
};

export const getArchives = () => {
  return {
    type: archiveActionType.GET_ARCHIVES,
  };
};

export const onGetArchives = (payload) => {
  return {
    type: archiveActionType.ON_GET_ARCHIVES,
    payload,
  };
};

export const onGetArchivesFail = (error) => {
  return {
    type: archiveActionType.ONL_GET_ARCHIVES_FAI,
    payload: error.xhr.response,
    error: true,
  };
};

export const getArchive = () => {
  return {
    type: archiveActionType.GET_ARCHIVE,
  };
};

export const onGetArchive = (payload) => {
  return {
    type: archiveActionType.ON_GET_ARCHIVE,
    payload,
  };
};

export const onGetArchiveFail = (error) => {
  return {
    type: archiveActionType.ON_GET_ARCHIVE_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const postArchive = () => {
  return {
    type: archiveActionType.POST_ARCHIVE,
  };
};

export const onPostArchive = (payload) => {
  return {
    type: archiveActionType.ON_POST_ARCHIVE,
    payload,
  };
};

export const onPostArchiveFail = (error) => {
  return {
    type: archiveActionType.ON_POST_ARCHIVE_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const patchArchive = () => {
  return {
    type: archiveActionType.PATCH_ARCHIVE,
  };
};

export const onPatchArchive = (payload) => {
  return {
    type: archiveActionType.ON_PATCH_ARCHIVE,
    payload,
  };
};

export const onPatchArchiveFail = (error) => {
  return {
    type: archiveActionType.ON_PATCH_ARCHIVE_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};

export const deleteArchive = () => {
  return {
    type: archiveActionType.DELETE_ARCHIVE,
  };
};

export const onDeleteArchive = (payload) => {
  return {
    type: archiveActionType.ON_DELETE_ARCHIVE,
    payload,
  };
};

export const onDeleteArchiveFail = (error) => {
  return {
    type: archiveActionType.ON_DELETE_ARCHIVE_FAIL,
    payload: error.xhr.response,
    error: true,
  };
};
