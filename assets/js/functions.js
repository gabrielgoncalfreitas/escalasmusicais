/*
CÍRCULO DAS QUINTAS
'C',  'D',  'E',  'F',  'G',  'A',  'B',  'C'
'G',  'A',  'B',  'C',  'D',  'E',  'F#', 'G'
'D',  'E',  'F#', 'G',  'A',  'B',  'C#', 'D'
'A',  'B',  'C#', 'D',  'E',  'F#', 'G#', 'A'
'E',  'F#', 'G#', 'A#', 'B',  'C#', 'D#', 'E'
'B',  'C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B'
'F#', 'G#', 'A#', 'B#', 'C#', 'D#', 'E',  'F#'
'C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#', 'C#'

CÍRCULO DAS QUARTAS
'C',  'D',  'E',  'F',  'G',  'A',  'B',  'C'
'F',  'G',  'A',  'Bb', 'C',  'D',  'E',  'F'
'Bb', 'C',  'D',  'Eb', 'F',  'G',  'Ab', 'Bb'
'Eb', 'F',  'G',  'Ab', 'Bb', 'C',  'D',  'Eb'
'Ab', 'Bb', 'C',  'Db', 'Eb', 'F',  'G',  'Ab'
'Db', 'Eb', 'F',  'Gb', 'Ab', 'Bb', 'C',  'Db'
'Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F',  'Gb'
'Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb', 'Cb'
*/

var arrayEscalaC = ['C', ' D', ' E', ' F', ' G', ' A', ' B', ' C']
var arrayEscalaCb = ['Cb', ' Db', ' Eb', ' Fb', ' Gb', ' Ab', ' Bb', ' Cb']
var arrayEscalaCSus = ['C#', ' D#', ' E#', ' F#', ' G#', ' A#', ' B#', ' C#']

var arrayEscalaD = ['D', ' E', ' F#', ' G', ' A', ' B', ' C#', ' D']
var arrayEscalaDb = ['Db', ' Eb', ' F', ' Gb', ' Ab', ' Bb', ' C', ' Db']
var arrayEscalaDSus = ['D#', ' E#', ' F##', ' G#', ' A#', ' B#', ' C##', ' D#']

var arrayEscalaE = ['E', ' F#', ' G#', ' A#', ' B', ' C#', ' D#', ' E']
var arrayEscalaEb = ['Eb', ' F', ' G', ' Ab', ' Bb', ' C', ' D', ' Eb']
var arrayEscalaESus = ['E#', ' G', ' A', ' A', ' Bb', ' C', ' D', ' Fb', ' E#']

var arrayEscalaF = ['F', ' G', ' A', ' Bb', ' C', ' D', ' E', ' F']
var arrayEscalaFb = ['Fb', ' Gb', ' Ab', ' Bbb', ' Cb', ' Db', ' Eb', ' Fb']
var arrayEscalaFSus = ['F#', ' G#', ' A#', ' B#', ' C#', ' D#', ' E', ' F#']

var arrayEscalaG = ['G', ' A', ' B', ' C', ' D', ' E', ' F#', ' G']
var arrayEscalaGb = ['Gb', ' Ab', ' Bb', ' Cb', ' Db', ' Eb', ' F', ' Gb']
var arrayEscalaGSus = ['G#', ' A#', ' B#', ' C#', ' D#', ' E#', ' F##', ' G#']

var arrayEscalaA = ['A', ' B', ' C#', ' D', ' E', ' F#', ' G#', ' A']
var arrayEscalaAb = ['Ab', ' Bb', ' C', ' Db', ' Eb', ' F', ' G', ' Ab']
var arrayEscalaASus = ['A#', ' B#', ' C##', ' D#', ' E#', ' F##', ' G##', ' A#']

var arrayEscalaB = ['B', ' C#', ' D#', ' E#', ' F#', ' G#', ' A#', ' B']
var arrayEscalaBb = ['Bb', ' C', ' D', ' Eb', ' F', ' G', ' Ab', ' Bb']
var arrayEscalaBSus = ['B#', ' D', ' E', ' F', ' G', ' A', ' Cb', ' B#']

function escala() {
    if ($('#nota').val() == 'C') { $('#escala').val(arrayEscalaC) }
    else if ($('#nota').val() == 'C#') { $('#escala').val(arrayEscalaCSus) }
    else if ($('#nota').val() == 'Db') { $('#escala').val(arrayEscalaDb) }
    else if ($('#nota').val() == 'D') { $('#escala').val(arrayEscalaD) }
    else if ($('#nota').val() == 'D#') { $('#escala').val(arrayEscalaDSus) }
    else if ($('#nota').val() == 'Eb') { $('#escala').val(arrayEscalaEb) }
    else if ($('#nota').val() == 'E') { $('#escala').val(arrayEscalaE) }
    else if ($('#nota').val() == 'E#') { $('#escala').val(arrayEscalaESus) }
    else if ($('#nota').val() == 'Fb') { $('#escala').val(arrayEscalaFb) }
    else if ($('#nota').val() == 'F') { $('#escala').val(arrayEscalaF) }
    else if ($('#nota').val() == 'F#') { $('#escala').val(arrayEscalaFSus) }
    else if ($('#nota').val() == 'Gb') { $('#escala').val(arrayEscalaGb) }
    else if ($('#nota').val() == 'G') { $('#escala').val(arrayEscalaG) }
    else if ($('#nota').val() == 'G#') { $('#escala').val(arrayEscalaGSus) }
    else if ($('#nota').val() == 'Ab') { $('#escala').val(arrayEscalaAb) }
    else if ($('#nota').val() == 'A') { $('#escala').val(arrayEscalaA) }
    else if ($('#nota').val() == 'A#') { $('#escala').val(arrayEscalaASus) }
    else if ($('#nota').val() == 'Bb') { $('#escala').val(arrayEscalaBb) }
    else if ($('#nota').val() == 'B') { $('#escala').val(arrayEscalaB) }
    else if ($('#nota').val() == 'B#') { $('#escala').val(arrayEscalaBSus) }
    else if ($('#nota').val() == 'Cb') { $('#escala').val(arrayEscalaCb) }
}