// Compilador Global de CSS

function importAll(r) {
  r.keys().forEach(r)
}

importAll(require.context('./', true, /\.(css|scss)$/))
importAll(require.context('./', true, /\.(png|jpe?g|gif|svg|ttf)$/))
