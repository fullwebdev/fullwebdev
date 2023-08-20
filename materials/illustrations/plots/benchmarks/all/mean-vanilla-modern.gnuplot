working_directory = system("dirname ".ARG0)."/"
data_file = working_directory."data.csv"
output_file = working_directory."mean-vanilla-modern.png"
set output output_file

set term png size 1024,550 font 'Liberation Sans,12'

set style fill solid
#set boxwidth 0.7
set yrange [0:*]
set xrange [0:1.2]
set xlabel "Note moyenne"
unset key
set datafile separator ","

myBoxWidth = 0.8
set offsets 0,0,0.5-myBoxWidth/2.,0.5

plot '<(egrep "^(VanillaJS|modern)" '.data_file.')' using 0:0:(0):13:($0-myBoxWidth/2.):($0+myBoxWidth/2.):($0+1):ytic(1) with boxxyerror lc variable

