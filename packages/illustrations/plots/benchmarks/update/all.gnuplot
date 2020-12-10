set term png size 1024,1024 font 'Liberation Sans,16'
set output "all.png"

set style fill solid
#set boxwidth 0.7
set yrange [0:*]
set xlabel "Durée moyenne (µs/ligne)"
unset key
set datafile separator ","

myBoxWidth = 0.8
set offsets 0,0,0.5-myBoxWidth/2.,0.5

plot "data.csv" using 2:0:(0):2:($0-myBoxWidth/2.):($0+myBoxWidth/2.):($0+1):ytic(1) with boxxyerror lc variable
