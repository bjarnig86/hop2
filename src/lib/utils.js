import { format } from "date-fns";

/**
 * Create an element with attributes and events, and append elements or
 * strings to it.
 *
 * Usage:
 *  const el = element(
 *    'button',
 *    { 'class': 'button' },
 *    { click: () => { ... } },
 *    'Takki'
 *   );
 *  returns
 *  <button class="button">Takki</button> with a click handler.
 *
 * @param {string} name Element name
 * @param {object} attributes Object containing attributes to attach to element.
 * @param {object} events Object of events to add to element.
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function element(name, attributes = null, events = null, ...children) {
  const el = document.createElement(name);

  for (const child of children) {
    if (!child) {
      continue;
    }

    if (attributes) {
      for (const attrib in attributes) {
        el.setAttribute(attrib, attributes[attrib]);
      }
    }

    if (events) {
      for (const event in events) {
        el.addEventListener(event, events[event]);
      }
    }

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }

  return el;
}

/**
 * Simplified element function.
 * Creates an element and append elements or strings to it.
 *
 * @param {string} name Element name
 * @param  {...any} children List of elements or strings to append to element.
 * @returns {object} HTML element.
 */
export function el(name, ...children) {
  return element(name, null, null, ...children);
}

export function empty(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}

export function isRelated(video,id) {
  if (video.length === 0) {
    return true;
  }
  for (let i = 0; i < video.length; i++) {
      if (video[i] === id){
        return true;
    }
  }
  return false;
}

export function allRelated(id, related) {
  for (let i = 0; i < related.length; i++) {
    for (let j = 0; j < related.length; j++) {
      id[i] = array[j];
      return true;
    }

  }
  return false;
}

/**
 * Format a timestamp as dd.mm.yyyy hh:mm:ss e.g. "01.11.2020 12:00:00".
 *
 * @param {number} timestamp Unix timestamp to format
 * @returns {string} Formatted string.
 */
export function formatDate(timestamp) {
  // TODO Útfæra með „vanilla JS“ eða nota date-fns pakka
  const created = timestamp;
  let currentDate = new Date();
  let timeInSec = currentDate.getTime();

  const minute = 60;

  let timeDifference = (timeInSec - created) / minute;
  console.log(created);
  console.log(timeInSec);
  console.log(timeDifference);

  const hour = 60*minute;
  const day = 24*hour;
  const week = 7*day;
  const month = 4*week;
  const year = 12*month;

  let x;

  if (timeDifference < minute) {
    return `Fyrir minna en mínútu síðan`;
  }

  if (timeDifference < hour) {
    x = Math.round(timeDifference/minute);
    if (x % 10 === 1 && x !== 11) {
      return `Fyrir ${x} mínútu síðan`
    } else {
    return `Fyrir ${x} mínútum síðan`;
    }
  }

  if (timeDifference < day) {
    x = Math.round(timeDifference/hour);
    if (x % 10 === 1 && x !== 11) {
      return `Fyrir ${x} klukkustund síðan`
    } else {
    return `Fyrir ${x} klukkustundum síðan`;
    }
  }

  if (timeDifference < week) {
    x = Math.round(timeDifference/day);
    if (x % 10 === 1 && x !== 11) {
      return `Fyrir ${x} degi síðan`
    } else {
    return `Fyrir ${x} dögum síðan`;
    }
  }

  if (timeDifference < month) {
    x = Math.round(timeDifference/week);
    if (x % 10 === 1 && x !== 11) {
      return `Fyrir ${x} viku síðan`
    } else {
    return `Fyrir ${x} vikum síðan`;
    }
  }

  if (timeDifference < year) {
    x = Math.round(timeDifference/month);
    if (x % 10 === 1 && x !== 11) {
      return `Fyrir ${x} mánuði síðan`
    } else {
    return `Fyrir ${x} mánuðum síðan`;
    }
  }

  if (timeDifference >= year) {
    x = Math.round(timeDifference/year);
    if (x % 10 === 1 && x !== 11) {
      return `Fyrir ${x} ári síðan`
    } else {
    return `Fyrir ${x} árum síðan`;
    }
  }

  return `Sett inn ${format(timestamp, 'dd/MM/yyyy kk:mm:ss')}`;
}
