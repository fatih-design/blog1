/** Formateer naar een voor mensen leesbare datum**/

const formatDate = (isoDate) =>{
    const date = new Date(isoDate);
    return date.toLocaleString('nl-NL',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

}
export default formatDate;