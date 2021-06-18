import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addDefaultLocale(en)


function timeConvert(tc) {
    const timeAgo = new TimeAgo('en-US');
    let seconds = Date.now() - tc * 1000;
    
   

   return timeAgo.format(Date.now() - seconds );
 
}

export default timeConvert;