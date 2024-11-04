//lib call
import { folderPath } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";
//please always use trailing slash(/) for folder or extension for file.
//never use slash in front of file or directory
//u might change croot parameter based on your path

const baseAPIURL = "https://extapi.buxxed.me";

export const backend = {
    user: {
        data: `${baseAPIURL}/data/user`,
        todo: `${baseAPIURL}/data/user/task/todo`,
        doing: `${baseAPIURL}/data/user/task/doing`,
        done: `${baseAPIURL}/data/user/task/done`,
    },
    wa: {
        text: "https://api.wa.my.id/api/v2/send/message/text",
        device: "https://api.wa.my.id/api/device/",
    },
    project: {
        data: `${baseAPIURL}/data/proyek`,
        anggota: `${baseAPIURL}/data/proyek/anggota`,
    },
    ux: {
        feedback: `${baseAPIURL}/notif/ux/postfeedback`,
        laporan: `${baseAPIURL}/notif/ux/postlaporan`,
        rating: `${baseAPIURL}/notif/ux/rating`,
        meeting: `${baseAPIURL}/notif/ux/postmeeting`,
        getReportData: `${baseAPIURL}/notif/ux/getreportdata`,
    }
}

export const croot = folderPath() + "jscroot/";

export const folder = {
    template: croot + "template/",
    controller: croot + "controller/",
    view: croot + "view/",
}

export const url = {
    template: {
        content: folder.template + "content/",
        header: folder.template + "header.html",
        navbar: folder.template + "navbar.html",
        settings: folder.template + "settings.html",
        sidebar: folder.template + "sidebar.html",
        footer: folder.template + "footer.html",
        rightbar: folder.template + "rightbar.html"
    },
    controller: {
        main: folder.controller + "main.js",
        navbar: folder.controller + "navbar.js"
    },
    view: {
        content: folder.view + "content/",
        header: folder.view + "header.js",
        search: folder.view + "search.js",
        settings: folder.view + "settings.js",
        navbar: folder.view + "navbar.js",
        footer: folder.view + "footer.js"
    }
}

export const id = {
    header: "header__container",
    navbar: "navbar",
    content: "content"
}
