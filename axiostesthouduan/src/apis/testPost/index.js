import { post, postForm, postJson } from '../base';
function getUrl(url) {
    return "ehr-admin/" + url;
}
export default {
    //testPost1
    testPost1(param) {
        let reqdata = param ? param : {};
        return post("testPost1", reqdata, {})
    },
    //testPost2
    testPost2(param,config={}) {
        let reqdata = param ? param : {};
        return postForm("testPost2", reqdata, config)
    },
    //testPost3
    testPost3(param) {
        let reqdata = param ? param : {};
        return postJson("testPost3", reqdata, {})
    },
    // student_selectCampStudentList(param) {
    //     let reqdata = param ? param : {};
    //     return postJson("student/selectCampStudentList", reqdata, {})
    // },
}