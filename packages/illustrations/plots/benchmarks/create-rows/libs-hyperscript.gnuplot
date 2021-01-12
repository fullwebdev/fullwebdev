working_directory = system("dirname ".ARG0)."/"
data_file = working_directory."data.csv"
output_file = working_directory."libs-hyperscript.png"
set output output_file

set term png size 1024,750 font 'Liberation Sans,16'

set style fill solid
set boxwidth 0.7
set yrange [0:*]
set ylabel "Durée moyenne (µs/ligne)"
unset key
set datafile separator ","

set linetype cycle 2

set xtics rotate by 45 right

plot '<(egrep "^(VanillaJS|RE:DOM|ivi|Hyperapp|React)," '.data_file.')' \
  using 0:2:($0+1):xtic(1) with boxes lc variable, \
  '' using 0:2:3:4 with yerrorbars lc rgb 'gray30' pt 0 lw 1
