# Viano

A library that lets you write songs using Vue components.

Targets the Web Audio API. Most compatible with up-to-date Chrome.

Uses [blackswan.js](https://github.com/isaaclyman/blackswan-js).

## Overview

This is not a great music composition tool, but it is a fun toy. Your songs will sound like an '80s ringtone played on a  miscellaneous woodwind. Oh well.

This is also a proof-of-concept for using Vue component markup as a tool for writing declarative code.

Do not use this library in mission-critical production code.

## Usage

To write a song in Viano you'll need to understand some basic music theory, such as the names of the notes (e.g. "c4") and note values (e.g. "quarter note").

The first line of "La Cucaracha" in Viano looks like this:

```html
<Song title="La cucaracha" :tempo="200" :time-signature="[4, 4]">
  <Part :measure="0">
    <Sequence>
      <Note name="c4" value="1/8" :repeat="3">La cuca</Note>
      <Note name="f4" value="3/8">ra</Note>
      <Note name="a4" value="1/4">cha</Note>
      <Note name="c4" value="1/8" :repeat="3">La cuca</Note>
      <Note name="f4" value="3/8">ra</Note>
      <Note name="a4" value="1/4">cha</Note>
      <Rest value="3/8"></Rest>
      <Note name="f4" value="1/4">ya</Note>
      <Note name="f4" value="1/8">no</Note>
      <Note name="e4" value="1/8" :repeat="2">puede</Note>
      <Note name="d4" value="1/8" :repeat="2">cami</Note>
      <Note name="c4" value="3/8">nar</Note>
    </Sequence>
  </Part>
</Song>
```

### `<Song>`

This element is the root of the Viano code. It is the only Viano element to have visible markup associated with it: a simple play/stop control.

Attributes:

- `title`: (optional: default 'Untitled') a string. Will be displayed next to the play/stop control.
- `tempo`: (optional: default 120) a number. The beats per minute for this song.
- `time-signature`: (optional: default [4, 4]) an array of two numbers. The time signature for the song, where [4, 4] is understood as 4/4 time.

### `<Part>`

This is the only element that can be inside of a `<Song>`. It indicates the measure at which the music it contains should start. It can contain a `<Sequence>`, `<Note>`, `<Chord>`, or `<Rest>`.

Attributes:

- `measure`: (optional: default 0) a number. The measure where the music should start. 0 corresponds to the beginning of the first measure.

### `<Sequence>`

This element contains a series of `<Note>`, `<Chord>`, and `<Rest>` which will be played in order.

Attributes:

- `repeat`: (optional) a number. If present, indicates the number of times in a row that the sequence should be repeated.

### `<Note>`

This element represents a single note played for a certain amount of time.

Attributes:

- `name`: (required) a string. The note between a0 and c8 which should be played.
- `value`: (required) a string ("1/4") or number (0.25). The note value, where "1/4" is a quarter note.
- `repeat`: (optional) a number. See the attribute of the same name on `<Sequence>`.
- `styles`: (optional) an array of blackswan-js style values. See [the blackswan-js docs](https://github.com/isaaclyman/blackswan-js#styles) for a full list.

### `<Rest>`

This element represents a rest (a gap between notes played) for a certain amount of time.

Attributes:

- `value`: (required) a string or number. See the attribute of the same name on `<Note>`.

### `<Chord>`

This element represents one or more notes played simultaneously for a certain amount of time.

Attributes:

- `notes`: (required) a string ("c4 e4 g4") or array (['c4', 'e4', 'g4']).
- `repeat`, `styles`, and `value`: see the attributes of the same name on `<Note>`.