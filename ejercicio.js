let date = '2023-05-20', arr = date.split('-'), month_name;
diaMesAño(arr);
mesAñodía(arr);
mesDíaAño(arr);
añoDiaMes(arr);
añoMesDía(arr);
fechaNombre(arr);
function diaMesAño(date) {
    /* console.log(date[0], date[1], date[2]); */
    fecha = date[2] + '/' + date[1] + '/' + date[0];
    console.log(fecha);
}
function mesAñodía(date) {
    fecha = date[1] + '/' + date[0] + '/' + date[2];
    console.log(fecha);
}
function mesDíaAño(date) {
    fecha = date[1] + '/' + date[2] + '/' + date[0]
    console.log(fecha)
}
function añoDiaMes(date) {
    fecha = date[0] + '/' + date[2] + '/' + date[1];
    console.log(fecha);
}
function añoMesDía(date) {
    fecha = date[0] + '/' + date[1] + '/' + date[2];
    console.log(fecha);
}
function fechaNombre(date) {
    switch (Number(date[1])) {
        case 1:
            month_name = "Enero";
            break;
        case 2:
            month_name = "Febrero";
            break;
        case 3:
            month_name = "Marzo";
            break;
        case 4:
            month_name = "Abril";
            break;
        case 5:
            month_name = "Mayo";
            break;
        case 6:
            month_name = "Junio";
            break;
        case 7:
            month_name = "Julio";
            break;
        case 8:
            month_name = "Agosto";
            break;
        case 9:
            month_name = "Septiembre";
            break;
        case 10:
            month_name = "Octubre";
            break;
        case 11:
            month_name = "Noviembre";
            break;
        case 12:
            month_name = "Diciembre";
            break;

        default:
            break;
    }
    fecha = date[1] + '/' + month_name + '/' + date[0];
    console.log(fecha);
}