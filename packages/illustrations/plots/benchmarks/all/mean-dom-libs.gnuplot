working_directory = system("dirname ".ARG0)."/"
data_file = working_directory."data.csv"
output_file = working_directory."mean-dom-libs.png"
set output output_file

set term png size 1024,550 font 'Liberation Sans,16'

set style fill solid
set boxwidth 0.7
set yrange [0:*]
set ylabel "Note moyenne"
unset key
set datafile separator ","

set linetype cycle 2

set xtics rotate by 45 right

plot '<(grep ",772 ," '.data_file.' | egrep -v "(Vanilla|cache|stdweb|domdiff|modern-helpers)")' \
  using 0:13:($0+1):xtic(1) with boxes lc variable

