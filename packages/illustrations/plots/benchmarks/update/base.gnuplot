working_directory = system("dirname ".ARG0)."/"
data_file = working_directory."data.csv"
output_file = working_directory."base.png"
set output output_file

set term png size 1024,550 font 'Liberation Sans,16'

set style fill solid
set boxwidth 0.7
set yrange [0:2000]
set ylabel "Durée moyenne (ms)"
unset key
set datafile separator ","

set linetype 1 lc rgb "gray90"
set linetype 2 lc rgb "gray90"
set linetype 3 lc rgb "gray90"
set linetype 4 lc rgb "gray90"
set linetype cycle 2

plot "<(egrep '^(VanillaJS|Inferno|React|lit-html),' ".data_file.")" \
  using 0:2:($0+1):xtic(1) with boxes lc variable, \
  '' using 0:2:3:4 with yerrorbars lc rgb 'gray30' pt 0 lw 1
