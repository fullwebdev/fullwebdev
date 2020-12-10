set term png size 1024,750 font 'Liberation Sans,16'
set output "mean-libs.png"

set style fill solid
set boxwidth 0.7
set yrange [0:*]
set ylabel "Note moyenne"
unset key
set datafile separator ","

set linetype 1 lc rgb "gray90"
set linetype 2 lc rgb "gray70"
set linetype 3 lc rgb "gray70"
set linetype 4 lc rgb "gray80"
set linetype 5 lc rgb "gray70"
set linetype 6 lc rgb "gray70"
set linetype 7 lc rgb "gray70"
set linetype 8 lc rgb "gray90"
set linetype cycle 2

set xtics rotate by 45 right

plot '<(egrep "^(VanillaJS \(DX\)|modern-helpers|lit-html|Inferno|React|Sinuous|Solid|ivi)," data.csv)' \
  using 0:13:($0+1):xtic(1) with boxes lc variable
