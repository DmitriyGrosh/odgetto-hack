import moment from 'moment';
import { nanoid } from 'nanoid';

const { scheduler } = window;

const divedens = [
  { date: '2022-03-19', dividend: 0.22, symbol: 'AAPL' },
  { date: '2021-08-06', dividend: 0.22, symbol: 'AAPL' },
  { date: '2021-05-07', dividend: 0.22, symbol: 'AAPL' },
  { date: '2021-02-05', dividend: 0.21, symbol: 'AAPL' },
  { date: '2020-11-06', dividend: 0.21, symbol: 'AAPL' },
  { date: '2020-08-07', dividend: 0.82, symbol: 'AAPL' },
  { date: '2020-05-08', dividend: 0.82, symbol: 'AAPL' },
  { date: '2020-02-07', dividend: 0.77, symbol: 'AAPL' },
  { date: '2019-11-07', dividend: 0.77, symbol: 'AAPL' },
  { date: '2019-08-09', dividend: 0.77, symbol: 'AAPL' },
  { date: '2019-05-10', dividend: 0.77, symbol: 'AAPL' },
  { date: '2019-02-08', dividend: 0.73, symbol: 'AAPL' },
  { date: '2018-11-08', dividend: 0.73, symbol: 'AAPL' },
  { date: '2018-08-10', dividend: 0.73, symbol: 'AAPL' },
  { date: '2018-05-11', dividend: 0.73, symbol: 'AAPL' },
  { date: '2018-02-09', dividend: 0.63, symbol: 'AAPL' },
  { date: '2017-11-10', dividend: 0.63, symbol: 'AAPL' },
  { date: '2017-08-10', dividend: 0.63, symbol: 'AAPL' },
  { date: '2017-05-11', dividend: 0.63, symbol: 'AAPL' },
  { date: '2017-02-09', dividend: 0.57, symbol: 'AAPL' },
  { date: '2016-11-03', dividend: 0.57, symbol: 'AAPL' },
  { date: '2016-08-04', dividend: 0.57, symbol: 'AAPL' },
  { date: '2016-05-05', dividend: 0.57, symbol: 'AAPL' },
  { date: '2016-02-04', dividend: 0.52, symbol: 'AAPL' },
  { date: '2015-11-05', dividend: 0.52, symbol: 'AAPL' },
  { date: '2015-08-06', dividend: 0.52, symbol: 'AAPL' },
  { date: '2015-05-07', dividend: 0.52, symbol: 'AAPL' },
  { date: '2015-02-05', dividend: 0.47, symbol: 'AAPL' },
  { date: '2014-11-06', dividend: 0.47, symbol: 'AAPL' },
  { date: '2014-08-07', dividend: 0.47, symbol: 'AAPL' },
  { date: '2014-05-08', dividend: 3.29, symbol: 'AAPL' },
  { date: '2014-02-06', dividend: 3.05, symbol: 'AAPL' },
  { date: '2013-11-06', dividend: 3.05, symbol: 'AAPL' },
  { date: '2013-08-08', dividend: 3.05, symbol: 'AAPL' },
  { date: '2013-05-09', dividend: 3.05, symbol: 'AAPL' },
  { date: '2013-02-07', dividend: 2.65, symbol: 'AAPL' },
  { date: '2012-11-07', dividend: 2.65, symbol: 'AAPL' },
  { date: '2012-08-09', dividend: 2.65, symbol: 'AAPL' },
  { date: '1995-11-21', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1995-08-16', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1995-05-26', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1995-02-13', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1994-11-18', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1994-08-15', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1994-05-27', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1994-02-07', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1993-11-19', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1993-08-16', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1993-05-28', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1993-02-12', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1992-11-30', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1992-08-17', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1992-06-01', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1992-02-14', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1991-11-18', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1991-08-19', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1991-05-20', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1991-02-15', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1990-11-16', dividend: 0.0011, symbol: 'AAPL' },
  { date: '1990-08-20', dividend: 0.001, symbol: 'AAPL' },
  { date: '1990-05-21', dividend: 0.001, symbol: 'AAPL' },
  { date: '1990-02-16', dividend: 0.001, symbol: 'AAPL' },
  { date: '1989-11-17', dividend: 0.001, symbol: 'AAPL' },
  { date: '1989-08-21', dividend: 0.0009, symbol: 'AAPL' },
];

export const timestamps = {
  AAPL: {
    timestamp: [
      1616160600, 1616419800, 1616506200, 1616592600, 1616679000, 1616765400, 1617024600, 1617111000, 1617197400,
      1617283800, 1617629400, 1617715800, 1617802200, 1617888600, 1617975000, 1618234200, 1618320600, 1618407000,
      1618493400, 1618579800, 1618839000, 1618925400, 1619011800, 1619098200, 1619184600, 1619443800, 1619530200,
      1619616600, 1619703000, 1619789400, 1620048600, 1620135000, 1620221400, 1620307800, 1620394200, 1620653400,
      1620739800, 1620826200, 1620912600, 1620999000, 1621258200, 1621344600, 1621431000, 1621517400, 1621603800,
      1621863000, 1621949400, 1622035800, 1622122200, 1622208600, 1622554200, 1622640600, 1622727000, 1622813400,
      1623072600, 1623159000, 1623245400, 1623331800, 1623418200, 1623677400, 1623763800, 1623850200, 1623936600,
      1624023000, 1624282200, 1624368600, 1624455000, 1624541400, 1624627800, 1624887000, 1624973400, 1625059800,
      1625146200, 1625232600, 1625578200, 1625664600, 1625751000, 1625837400, 1626096600, 1626183000, 1626269400,
      1626355800, 1626442200, 1626701400, 1626787800, 1626874200, 1626960600, 1627047000, 1627306200, 1627392600,
      1627479000, 1627565400, 1627651800, 1627911000, 1627997400, 1628083800, 1628170200, 1628256600, 1628515800,
      1628602200, 1628688600, 1628775000, 1628861400, 1629120600, 1629207000, 1629293400, 1629379800, 1629466200,
      1629725400, 1629811800, 1629898200, 1629984600, 1630071000, 1630330200, 1630416600, 1630503000, 1630589400,
      1630675800, 1631021400, 1631107800, 1631194200, 1631280600, 1631539800, 1631626200, 1631712600, 1631799000,
      1631885400, 1632144600, 1632231000, 1632317400, 1632403800, 1632490200, 1632749400, 1632835800, 1632922200,
      1633008600, 1633095000, 1633354200, 1633440600, 1633527000, 1633613400, 1633699800, 1633959000, 1634045400,
      1634131800, 1634218200, 1634304600, 1634563800, 1634650200, 1634736600, 1634823000, 1634909400, 1635168600,
      1635255000, 1635341400, 1635427800, 1635514200, 1635773400, 1635859800, 1635946200, 1636032600, 1636119000,
      1636381800, 1636468200, 1636554600, 1636641000, 1636727400, 1636986600, 1637073000, 1637159400, 1637245800,
      1637332200, 1637591400, 1637677800, 1637764200, 1637937000, 1638196200, 1638282600, 1638369000, 1638455400,
      1638541800, 1638801000, 1638887400, 1638973800, 1639060200, 1639146600, 1639405800, 1639492200, 1639578600,
      1639665000, 1639751400, 1640010600, 1640097000, 1640183400, 1640269800, 1640615400, 1640701800, 1640788200,
      1640874600, 1640961000, 1641220200, 1641306600, 1641393000, 1641479400, 1641565800, 1641825000, 1641911400,
      1641997800, 1642084200, 1642170600, 1642516200, 1642602600, 1642689000, 1642775400, 1643034600, 1643121000,
      1643207400, 1643293800, 1643380200, 1643639400, 1643725800, 1643812200, 1643898600, 1643985000, 1644244200,
      1644330600, 1644417000, 1644503400, 1644589800, 1644849000, 1644935400, 1645021800, 1645108200, 1645194600,
      1645540200, 1645626600, 1645713000, 1645799400, 1646058600, 1646145000, 1646231400, 1646317800, 1646404200,
      1646663400, 1646749800, 1646836200, 1646922600, 1647009000, 1647264600, 1647351000, 1647437400, 1647523800,
      1647610200, 1647633602,
    ],
    symbol: 'AAPL',
    previousClose: null,
    chartPreviousClose: 120.53,
    dataGranularity: 300,
    end: null,
    start: null,
    close: [
      119.99, 123.39, 122.54, 120.09, 120.59, 121.21, 121.39, 119.9, 122.15, 123, 125.9, 126.21, 127.9, 130.36, 133,
      131.24, 134.43, 132.03, 134.5, 134.16, 134.84, 133.11, 133.5, 131.94, 134.32, 134.72, 134.39, 133.58, 133.48,
      131.46, 132.54, 127.85, 128.1, 129.74, 130.21, 126.85,
    ],
  },
};

const data = [
  {
    shortName: 'Apple Inc.',
    longName: 'Apple Inc.',
    symbol: 'AAPL',
    dividends: [
      { date: '2021-08-06', dividendPrice: 0.22, symbol: 'AAPL' },
      { date: '2021-05-07', dividendPrice: 0.22, symbol: 'AAPL' },
      { date: '2021-02-05', dividendPrice: 0.21, symbol: 'AAPL' },
      { date: '2020-11-06', dividendPrice: 0.21, symbol: 'AAPL' },
      { date: '2020-08-07', dividendPrice: 0.82, symbol: 'AAPL' },
      { date: '2020-05-08', dividendPrice: 0.82, symbol: 'AAPL' },
    ],
    currentPrice: 163.98,
  },
  {
    shortName: 'Microsoft Corporation',
    longName: 'Microsoft Corporation',
    symbol: 'MSFT',
    dividends: [
      { date: '2021-11-17', dividendPrice: 0.62, symbol: 'MSFT' },
      { date: '2021-08-18', dividendPrice: 0.56, symbol: 'MSFT' },
      { date: '2021-05-19', dividendPrice: 0.56, symbol: 'MSFT' },
      { date: '2021-02-17', dividendPrice: 0.56, symbol: 'MSFT' },
      { date: '2020-11-18', dividendPrice: 0.56, symbol: 'MSFT' },
      { date: '2020-08-19', dividendPrice: 0.51, symbol: 'MSFT' },
      { date: '2020-05-20', dividendPrice: 0.51, symbol: 'MSFT' },
    ],
    currentPrice: 300.43,
  },
  { shortName: 'Alphabet Inc.', longName: 'Alphabet Inc.', symbol: 'GOOG', currentPrice: 2736.03 },
  { shortName: 'Amazon.com, Inc.', longName: 'Amazon.com, Inc.', symbol: 'AMZN', currentPrice: 3225.01 },
  { shortName: 'Tesla, Inc.', longName: 'Tesla, Inc.', symbol: 'TSLA', currentPrice: 905.39 },
  {
    shortName: 'NVIDIA Corporation',
    longName: 'NVIDIA Corporation',
    symbol: 'NVDA',
    dividends: [
      { date: '2021-08-31', dividendPrice: 0.04, symbol: 'NVDA' },
      { date: '2021-06-09', dividendPrice: 0.16, symbol: 'NVDA' },
      { date: '2021-03-09', dividendPrice: 0.16, symbol: 'NVDA' },
      { date: '2020-12-03', dividendPrice: 0.16, symbol: 'NVDA' },
      { date: '2020-09-01', dividendPrice: 0.16, symbol: 'NVDA' },
      { date: '2020-06-04', dividendPrice: 0.16, symbol: 'NVDA' },
    ],
    currentPrice: 264.53,
  },
  { shortName: 'Meta Platforms, Inc.', longName: 'Meta Platforms, Inc.', symbol: 'FB', currentPrice: 216.49 },
  {
    shortName: 'Taiwan Semiconductor Manufactur',
    longName: 'Taiwan Semiconductor Manufacturing Company Limited',
    symbol: 'TSM',
    dividends: [
      { date: '2021-12-16', dividendPrice: 0.4677, symbol: 'TSM' },
      { date: '2021-09-16', dividendPrice: 0.5, symbol: 'TSM' },
      { date: '2021-06-17', dividendPrice: 0.45, symbol: 'TSM' },
      { date: '2021-03-17', dividendPrice: 0.45, symbol: 'TSM' },
      { date: '2020-12-17', dividendPrice: 0.44, symbol: 'TSM' },
      { date: '2020-09-17', dividendPrice: 0.43, symbol: 'TSM' },
      { date: '2020-06-18', dividendPrice: 0.42, symbol: 'TSM' },
      { date: '2020-03-19', dividendPrice: 0.42, symbol: 'TSM' },
    ],
    currentPrice: 106.72,
  },
  {
    shortName: 'UnitedHealth Group Incorporated',
    longName: 'UnitedHealth Group Incorporated',
    symbol: 'UNH',
    dividends: [
      { date: '2021-09-10', dividendPrice: 1.45, symbol: 'UNH' },
      { date: '2021-06-18', dividendPrice: 1.45, symbol: 'UNH' },
      { date: '2021-03-12', dividendPrice: 1.25, symbol: 'UNH' },
      { date: '2020-12-04', dividendPrice: 1.25, symbol: 'UNH' },
      { date: '2020-09-11', dividendPrice: 1.25, symbol: 'UNH' },
      { date: '2020-06-19', dividendPrice: 1.25, symbol: 'UNH' },
      { date: '2020-03-13', dividendPrice: 1.08, symbol: 'UNH' },
    ],
    currentPrice: 506.12,
  },
  {
    shortName: 'Johnson & Johnson',
    longName: 'Johnson & Johnson',
    symbol: 'JNJ',
    dividends: [
      { date: '2021-08-23', dividendPrice: 1.06, symbol: 'JNJ' },
      { date: '2021-05-24', dividendPrice: 1.06, symbol: 'JNJ' },
      { date: '2021-02-22', dividendPrice: 1.01, symbol: 'JNJ' },
      { date: '2020-11-23', dividendPrice: 1.01, symbol: 'JNJ' },
      { date: '2020-08-24', dividendPrice: 1.01, symbol: 'JNJ' },
      { date: '2020-05-22', dividendPrice: 1.01, symbol: 'JNJ' },
    ],
    currentPrice: 174.84,
  },
  {
    shortName: 'Visa Inc.',
    longName: 'Visa Inc.',
    symbol: 'V',
    dividends: [
      { date: '2021-08-12', dividendPrice: 0.32, symbol: 'V' },
      { date: '2021-05-13', dividendPrice: 0.32, symbol: 'V' },
      { date: '2021-02-11', dividendPrice: 0.32, symbol: 'V' },
      { date: '2020-11-12', dividendPrice: 0.32, symbol: 'V' },
      { date: '2020-08-13', dividendPrice: 0.3, symbol: 'V' },
      { date: '2020-05-13', dividendPrice: 0.3, symbol: 'V' },
    ],
    currentPrice: 219.11,
  },
  {
    shortName: 'Walmart Inc.',
    longName: 'Walmart Inc.',
    symbol: 'WMT',
    dividends: [
      { date: '2021-12-09', dividendPrice: 0.55, symbol: 'WMT' },
      { date: '2021-08-12', dividendPrice: 0.55, symbol: 'WMT' },
      { date: '2021-05-06', dividendPrice: 0.55, symbol: 'WMT' },
      { date: '2021-03-18', dividendPrice: 0.55, symbol: 'WMT' },
      { date: '2020-12-10', dividendPrice: 0.54, symbol: 'WMT' },
      { date: '2020-08-13', dividendPrice: 0.54, symbol: 'WMT' },
      { date: '2020-05-07', dividendPrice: 0.54, symbol: 'WMT' },
      { date: '2020-03-19', dividendPrice: 0.54, symbol: 'WMT' },
    ],
    currentPrice: 145.44,
  },
  {
    shortName: 'Bank of America Corporation',
    longName: 'Bank of America Corporation',
    symbol: 'BAC',
    dividends: [
      { date: '2021-09-02', dividendPrice: 0.21, symbol: 'BAC' },
      { date: '2021-06-03', dividendPrice: 0.18, symbol: 'BAC' },
      { date: '2021-03-04', dividendPrice: 0.18, symbol: 'BAC' },
      { date: '2020-12-03', dividendPrice: 0.18, symbol: 'BAC' },
      { date: '2020-09-03', dividendPrice: 0.18, symbol: 'BAC' },
      { date: '2020-06-04', dividendPrice: 0.18, symbol: 'BAC' },
    ],
    currentPrice: 42.9,
  },
  {
    shortName: 'Procter & Gamble Company (The)',
    longName: 'The Procter & Gamble Company',
    symbol: 'PG',
    dividends: [
      { date: '2021-10-21', dividendPrice: 0.8698, symbol: 'PG' },
      { date: '2021-07-22', dividendPrice: 0.87, symbol: 'PG' },
      { date: '2021-04-22', dividendPrice: 0.87, symbol: 'PG' },
      { date: '2021-01-21', dividendPrice: 0.79, symbol: 'PG' },
      { date: '2020-10-22', dividendPrice: 0.79, symbol: 'PG' },
      { date: '2020-07-23', dividendPrice: 0.79, symbol: 'PG' },
      { date: '2020-04-23', dividendPrice: 0.79, symbol: 'PG' },
    ],
    currentPrice: 150.15,
  },
  {
    shortName: 'Home Depot, Inc. (The)',
    longName: 'The Home Depot, Inc.',
    symbol: 'HD',
    dividends: [
      { date: '2021-09-01', dividendPrice: 1.65, symbol: 'HD' },
      { date: '2021-06-02', dividendPrice: 1.65, symbol: 'HD' },
      { date: '2021-03-10', dividendPrice: 1.65, symbol: 'HD' },
      { date: '2020-12-02', dividendPrice: 1.5, symbol: 'HD' },
      { date: '2020-09-02', dividendPrice: 1.5, symbol: 'HD' },
      { date: '2020-06-03', dividendPrice: 1.5, symbol: 'HD' },
      { date: '2020-03-11', dividendPrice: 1.5, symbol: 'HD' },
    ],
    currentPrice: 340.74,
  },
  {
    shortName: 'Mastercard Incorporated',
    longName: 'Mastercard Incorporated',
    symbol: 'MA',
    dividends: [
      { date: '2021-10-07', dividendPrice: 0.44, symbol: 'MA' },
      { date: '2021-07-08', dividendPrice: 0.44, symbol: 'MA' },
      { date: '2021-04-08', dividendPrice: 0.44, symbol: 'MA' },
      { date: '2021-01-07', dividendPrice: 0.44, symbol: 'MA' },
      { date: '2020-10-08', dividendPrice: 0.4, symbol: 'MA' },
      { date: '2020-07-08', dividendPrice: 0.4, symbol: 'MA' },
      { date: '2020-04-08', dividendPrice: 0.4, symbol: 'MA' },
    ],
    currentPrice: 350.09,
  },
  {
    shortName: 'Exxon Mobil Corporation',
    longName: 'Exxon Mobil Corporation',
    symbol: 'XOM',
    dividends: [
      { date: '2021-08-12', dividendPrice: 0.87, symbol: 'XOM' },
      { date: '2021-05-12', dividendPrice: 0.87, symbol: 'XOM' },
      { date: '2021-02-09', dividendPrice: 0.87, symbol: 'XOM' },
      { date: '2020-11-10', dividendPrice: 0.87, symbol: 'XOM' },
      { date: '2020-08-12', dividendPrice: 0.87, symbol: 'XOM' },
      { date: '2020-05-12', dividendPrice: 0.87, symbol: 'XOM' },
    ],
    currentPrice: 78.67,
  },
  {
    shortName: 'Chevron Corporation',
    longName: 'Chevron Corporation',
    symbol: 'CVX',
    dividends: [
      { date: '2021-08-18', dividendPrice: 1.34, symbol: 'CVX' },
      { date: '2021-05-18', dividendPrice: 1.34, symbol: 'CVX' },
      { date: '2021-02-16', dividendPrice: 1.29, symbol: 'CVX' },
      { date: '2020-11-17', dividendPrice: 1.29, symbol: 'CVX' },
      { date: '2020-08-18', dividendPrice: 1.29, symbol: 'CVX' },
      { date: '2020-05-18', dividendPrice: 1.29, symbol: 'CVX' },
    ],
    currentPrice: 161.73,
  },
  {
    shortName: 'Pfizer, Inc.',
    longName: 'Pfizer Inc.',
    symbol: 'PFE',
    dividends: [
      { date: '2021-11-04', dividendPrice: 0.39, symbol: 'PFE' },
      { date: '2021-07-29', dividendPrice: 0.39, symbol: 'PFE' },
      { date: '2021-05-06', dividendPrice: 0.39, symbol: 'PFE' },
      { date: '2021-01-28', dividendPrice: 0.39, symbol: 'PFE' },
      { date: '2020-11-05', dividendPrice: 0.38, symbol: 'PFE' },
      { date: '2020-07-30', dividendPrice: 0.38, symbol: 'PFE' },
      { date: '2020-05-07', dividendPrice: 0.38, symbol: 'PFE' },
    ],
    currentPrice: 54.51,
  },
  {
    shortName: 'Alibaba Group Holding Limited',
    longName: 'Alibaba Group Holding Limited',
    symbol: 'BABA',
    currentPrice: 108.3,
  },
];

const parseDate = scheduler.date.str_to_date('%Y-%m-%d');

export const events = data.map((elem) => {
  if (elem.dividends) {
    const newArr = elem.dividends.map((el, id) => {
      const startTime = '10:30';
      const endTime = '16:00';
      const date = moment(el.date).format('YYYY-MM-DD');
      const startDateTime = moment(`${date} ${startTime}`).format();
      const endDateTime = moment(`${date} ${endTime}`).format();
      return {
        ...el,
        id: nanoid(),
        count: id + 1,
        color: '#5142AB',
        start_date: startDateTime,
        end_date: endDateTime,
        text: `диведенды компании ${el.symbol}`,
      };
    });

    return {
      ...elem,
      dividends: newArr,
    };
  }
  return elem;
});
