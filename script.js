function insert (num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{ 
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function percent() 
{
    var pPos = $('#pointspossible'). val();
    var pEarned = $('#pointsgiven'). val();
    var perc = ((pEarned/pPos) * 100).toFixed(3);
    $('#pointsperc').val(perc);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval (resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "nada para calcular"
    }
}