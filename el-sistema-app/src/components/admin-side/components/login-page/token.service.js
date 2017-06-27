export default function get(){
    let token = localStorage.getItem('id_token');
    return token;
}