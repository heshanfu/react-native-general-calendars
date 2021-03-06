/**
 * Copyright 2016 Reza (github.com/rghorbani).
 *
 * @flow
 * @providesModule RNGCalendars
 */

'use strict';

module.exports = {
  get Calendar() { return require('./calendar'); },
  get CalendarList() { return require('./calendar-list'); },
  get DatePicker() { return require('./datepicker'); },
};
