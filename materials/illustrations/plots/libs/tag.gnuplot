working_directory = system("dirname ".ARG0)."/"
data_file = working_directory."data.csv"
output_file = working_directory."tag.png"

set term png size 1024,550 font 'Liberation Sans,16'
set output output_file

set style fill solid
set boxwidth 0.7
set yrange [0:*]
set ylabel "ko (min + gzip)"
unset key
set datafile separator ","

set linetype cycle 2

plot '<(egrep ",tagged templates$" '.data_file.')' \
  using 0:3:($0+1):xtic(1) with boxes lc variable
