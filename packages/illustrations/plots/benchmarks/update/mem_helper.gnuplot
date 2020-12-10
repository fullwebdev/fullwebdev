set term png size 1024,750 font 'Liberation Sans,16'
set output "mem_helper.png"

set style fill solid
set boxwidth 0.7
set yrange [0:2000]
set ylabel "Durée moyenne (ms)"
unset key
set datafile separator ","

set linetype 1 lc rgb "gray90"
set linetype 2 lc rgb "black"
set linetype 3 lc rgb "gray70"
set linetype 4 lc rgb "gray70"
set linetype 5 lc rgb "gray80"
set linetype 6 lc rgb "gray90"
set linetype 7 lc rgb "gray90"
set linetype 8 lc rgb "gray80"
set linetype cycle 2

set xtics rotate by 45 right

plot '<(egrep "^(VanillaJS|this.rows\[id\].children|this.tbody.children|Helper avec cache|this.rows\[id\].querySelector|Helper|React|this.tbody.querySelector)," data.csv)' \
  using 0:2:($0+1):xtic(1) with boxes lc variable, \
  '' using 0:2:3:4 with yerrorbars lc rgb 'gray30' pt 0 lw 1

