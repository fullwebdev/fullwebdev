set term png size 1024,750 font 'Liberation Sans,16'
set output "no-mem_querySelector.png"

set style fill solid
set boxwidth 0.7
set yrange [0:*]
set ylabel "Durée moyenne (ms)"
unset key
set datafile separator ","

set linetype 1 lc rgb "gray90"
set linetype 2 lc rgb "gray90"
set linetype 3 lc rgb "gray90"
set linetype 4 lc rgb "gray90"
set linetype 5 lc rgb "black"
set linetype cycle 2

set xtics rotate by 45 right

plot '<(egrep "^(VanillaJS|Inferno|this.tbody.querySelector|lit-html|React)," data.csv)' \
  using 0:2:($0+1):xtic(1) with boxes lc variable, \
  '' using 0:2:3:4 with yerrorbars lc rgb 'gray30' pt 0 lw 1
