export default function makePic(str){
    var url = 'https://fuss10.elemecdn.com/'+ str[0] + '/' + str.substr(1,2) + '/' + str.substring(3);
    var end = str.slice(-3);
    if(end == 'peg'){
        return url + '.jpeg';
    }else if(end == 'png'){
        return url + '.png';
    }
}