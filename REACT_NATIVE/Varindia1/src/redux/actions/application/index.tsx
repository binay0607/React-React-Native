import * as actionTypes from '../../services';

const changeTheme = (theme: any) => {
    return {
        type: actionTypes.CHANGE_THEME,
        theme,
    };
};

const changeFont = (font: any) => {
    return {
        type: actionTypes.CHANGE_FONT,
        font,
    };
};

const forceTheme = (force_dark: any) => {
    return {
        type: actionTypes.FORCE_APPEARANCE,
        force_dark,
    };
};

const changeLanguge = (language: any) => {
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        language,
    };
};
const changeMusic = (music: any) => {
    return {
        type: actionTypes.CHANGE_MUSIC,
        music,
    };
};
const changeSoundEffects = (soundeffects: any) => {
    return {
        type: actionTypes.CHANGE_SOUND_EFFECTS,
        soundeffects,
    };
};
const changeAnimations = (animations: any) => {
    return {
        type: actionTypes.CHANGE_ANIMATIONS,
        animations,
    };
};
const changeAutomaticDownload = (automaticdownload: any) => {
    return {
        type: actionTypes.CHANGE_AUTOMATIC_DOWNLOAD,
        automaticdownload,
    };
};
const changeDownloadUsingCellularData = (DownloadUsingCellularData: any) => {
    return {
        type: actionTypes.CHANGE_DOWNLOAD_USING_CELLULAR_DATA,
        DownloadUsingCellularData,
    };
};
const changePracticeReminder = (PracticeReminder: any) => {
    return {
        type: actionTypes.CHANGE_PRACTICE_REMINDER,
        PracticeReminder,
    };
};
export const onChangeTheme = (theme: any) => (dispatch: (arg0: { type: any; theme: any; }) => void) => {
    dispatch(changeTheme(theme));
};

export const onForceTheme = (mode: any) => (dispatch: (arg0: { type: any; force_dark: any; }) => void) => {
    dispatch(forceTheme(mode));
};

export const onChangeFont = (font: any) => (dispatch: (arg0: { type: any; font: any; }) => void) => {
    dispatch(changeFont(font));
};

export const onChangeLanguage = (language: any) => (dispatch: (arg0: { type: any; language: any; }) => void) => {
    dispatch(changeLanguge(language));
};
export const onChangeMusic = (music: any) => (dispatch: (arg0: { type: any; music: any; }) => void) => {
    dispatch(changeMusic(music));
};
export const onChangeSoundEffect = (soundeffects: any) => (dispatch: (arg0: { type: any; soundeffects: any; }) => void) => {
    dispatch(changeSoundEffects(soundeffects));
};
export const onChangeAnimations = (animations: any) => (dispatch: (arg0: { type: any; animations: any; }) => void) => {
    dispatch(changeAnimations(animations));
};
export const onChangeAutomaticDownload = (automaticdownload: any) => (dispatch: (arg0: { type: any; automaticdownload: any; }) => void) => {
    dispatch(changeAutomaticDownload(automaticdownload));
};
export const onChangeDownloadUsingCellularData = (DownloadUsingCellularData: any) => (dispatch: (arg0: { type: any; DownloadUsingCellularData: any; }) => void) => {
    dispatch(changeDownloadUsingCellularData(DownloadUsingCellularData));
};
export const onChangePracticeReminder = (PracticeReminder: any) => (dispatch: (arg0: { type: any; PracticeReminder: any; }) => void) => {
    dispatch(changePracticeReminder(PracticeReminder));
};
