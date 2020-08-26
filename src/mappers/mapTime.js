export const mapTime = timestamp =>{
    var current_date = new Date();
    var difference = current_date.getTime() - timestamp * 1000;
    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24
    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60
    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60
    var secondsDifference = Math.floor(difference/1000);
    var DateTimeDifference = '';
    if(daysDifference!='') {DateTimeDifference +=' '+daysDifference +' '+ DaysTimeLabel(daysDifference,'day');} 
    if(hoursDifference!='') {DateTimeDifference +=' '+hoursDifference +' '+ DaysTimeLabel(daysDifference,'hour'); }
    if(minutesDifference!='') {DateTimeDifference +=' '+minutesDifference +' '+ DaysTimeLabel(daysDifference,'minute'); }
    if(secondsDifference!='') {DateTimeDifference +=' '+secondsDifference +' '+ DaysTimeLabel(daysDifference,'second'); }
    return DateTimeDifference;
}

const DaysTimeLabel = (difference,label) =>{

    if(difference==1){
        return label;
    }
    else{
        return label+'s';
    }

}
