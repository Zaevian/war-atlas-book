const warListRaw = `
Banana Wars (1898-1934)
Second Boer War (1899-1902)
Boxer Rebellion (1899-1901)
Moro Rebellion (1899-1913)
Philippine-American War (1899-1902)
Russo-Japanese War (1904-1905)
Herero and Namaqua Genocide (1904-1908)
Mexican Revolution (1910-1920)
Italo-Turkish War (1911-1912)
Xinhai Revolution (1911-1912)
Balkan Wars (1912-1913)
World War I (1914-1918)
Armenian Genocide (1915-1923)
Russo-Turkish War (1916-1918)
Russian Civil War (1917-1923)
Polish-Soviet War (1919-1921)
Irish War of Independence (1919-1921)
Greco-Turkish War (1919-1922)
Korean Independence Movement (1919-1945)
Rif War (1920-1926)
Moroccan War (1921-1926)
Second Zhili-Fengtian War (1924)
Chinese Civil War (1927-1949)
Pacification of Manchukuo (1931-1942)
Chaco War (1932-1935)
Second Italo-Ethiopian War (1935-1936)
Spanish Civil War (1936-1939)
Second Sino-Japanese War (1937-1945)
Soviet-Japanese Border Wars (1938-1939)
Phoney War (1939-1940)
World War II (1939-1945)
Greek-Italian War (1940-1941)
Ecuador-Peru War (1941; also noted in 1981 and 1995)
Continuation War (1941-1944)
Indonesian National Revolution (1945-1949)
Balochistan Conflict (1948-present)
First Kashmir War (1947-1948)
Civil War in Mandatory Palestine (1947-1948)
Indo-Pakistani War (1947-1948)
Greek Civil War (1946-1949)
First Indochina War (1946-1954)
Malayan Emergency (1948-1960)
Korean War (1950-1953)
Mau Mau Uprising (1952-1960)
Algerian War of Independence (1954-1962)
Vietnam War (1955-1975)
Laotian Civil War (1959-1975)
Bay of Pigs Invasion (1961)
Cuban Missile Crisis (1962)
Sino-Indian War (1962)
Guatemalan Civil War (1960-1996)
Guinea-Bissau War of Independence (1963-1974)
Mozambican War of Independence (1964-1974)
Colombian Armed Conflict (1964-present)
Mozambican Civil War (1977-1992)
South African Border War (1966-1989)
Korean DMZ Conflict (1966-1969)
West Papuan Conflict (1960s-present)
The Troubles in Northern Ireland (late 1960s-1998)
Naxalite-Maoist Insurgency (1967-present)
Cambodian Civil War (1967-1975)
Biafran War (Nigerian Civil War) (1967-1970)
Six-Day War (1967)
Basque Conflict (ETA Insurgency, 1968-2018)
Bangladesh Liberation War (1971)
Indo-Pakistani War (1971)
Yom Kippur War (1973)
Cyprus Conflict (1974-present)
Ethiopian Civil War (1974-1991)
East Timor Conflict (1975-1999)
Western Sahara War (1975-1991)
Western Sahara Conflict (1975-present)
Lebanese Civil War (1975-1990)
Cambodian-Vietnamese Conflict (1975-1979)
Khmer Rouge Regime (1975-1979)
Angolan Civil War (1975-2002)
Ogaden War (1977-1978)
Libyan-Egyptian War (1977)
Chad-Libyan Conflict (1978-1987)
Libyan-Chadian Conflict (1978-1987)
Ugandan-Tanzanian War (1978-1979)
Sino-Vietnamese War (1979)
Sino-Vietnamese Conflicts (1979-1990)
Salvadoran Civil War (1979-1992)
Soviet-Afghan War (1979-1989)
Iranian Revolution (1979)
Iran-Iraq War (1980-1988)
Peruvian Internal Conflict (1980-present)
Iranian Embassy Siege (1980)
Nicaraguan Contra War (1981-1990)
Falklands War (1982)
Invasion of Grenada (1983)
Sri Lankan Civil War (1983-2009)
Second Sudanese Civil War (1983-2005)
Kurdish-Turkish Conflict (1984-present)
First Intifada (1987-1993)
First Nagorno-Karabakh War (1988-1994)
Bougainville Civil War (1988-1998)
Invasion of Panama (1989)
First Liberian Civil War (1989-1996)
Kashmir Insurgency (1989-present)
Croatian War of Independence (1991-1995)
Sierra Leone Civil War (1991-2002)
Somali Civil War (1991-present)
Algerian Civil War (1991-2002)
Georgian Civil War (1991-1993)
Second Intifada (2000-2005)
War in Abkhazia (1992-1993)
Tajikistani Civil War (1992-1997)
Bosnian War (1992-1995)
Rwandan Genocide (1994)
Chiapas Conflict (1994-present)
First Chechen War (1994-1996)
Cenepa War (1995)
Second Congo War (1998-2003)
Eritrean-Ethiopian War (1998-2000)
Kosovo War (1999)
Kargil War (1999)
Second Chechen War (1999-2009)
Second Liberian Civil War (1999-2003)
Al-Qaeda Insurgency in Yemen (1998-present)
Nepalese Civil War (1996-2006)
2001 Insurgency in the Republic of North Macedonia (2001)
War on Terror (2001-present)
War in Afghanistan (2001-2021)
Nigerian Sharia Conflict (2000-present)
Iraq War (2003-2011)
Darfur Conflict (2003-present)
Kivu Conflict (2004-present)
War in North-West Pakistan (2004-present)
South Thailand Insurgency (2004-present)
Niger Delta Conflict (2004-present)
First Ivorian Civil War (2002-2007)
Russo-Georgian War (2008)
Operation Cast Lead (2008-2009)
Boko Haram Insurgency (2009-present)
Second Ivorian Civil War (2010-2011)
Lebanese-Israeli Conflict (2006)
Lebanon Conflict (2006)
Mexican Drug War (2006-present)
Operation Protective Edge (2014)
Libyan Civil War (2011)
Syrian Civil War (2011-present)
Central African Republic Civil War (2012-present)
Northern Mali Conflict (2012-present)
South Sudanese Civil War (2013-2018)
Second Libyan Civil War (2014-2020)
Yemeni Civil War (2014-present)
Russo-Ukrainian War (2014-present)
War on ISIL (2014-present)
Syrian-Turkish Border Clashes (2016-present)
Crisis in Venezuela (2016-present)
Rohingya Conflict in Myanmar (2017-present)
Armenian-Azerbaijani Clashes (2020-present)
Border Skirmishes between India and China (2020-2022, Ladakh)
Tigray War (2020-2022)
2022 Russian Invasion of Ukraine
Myanmar Civil War (2021-present)
Nagorno-Karabakh Conflict (2023)
`;

const toSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const splitLine = (line) => {
  const yearBlock = line.match(/\(([^()]*)\)\s*$/);
  if (yearBlock) {
    const years = yearBlock[1].trim();
    const name = line.slice(0, line.lastIndexOf("(")).trim();
    return { name, years };
  }

  const startsWithYear = line.match(/^(\d{4})\s+(.+)$/);
  if (startsWithYear) {
    return {
      name: startsWithYear[2].trim(),
      years: startsWithYear[1],
    };
  }

  return { name: line.trim(), years: "Dates TBD" };
};

export const baseWarEntries = (() => {
  const usedIds = new Map();

  return warListRaw
    .split("\n")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry, index) => {
      const { name, years } = splitLine(entry);
      const baseId = toSlug(name);
      const nextIndex = (usedIds.get(baseId) || 0) + 1;
      usedIds.set(baseId, nextIndex);

      return {
        id: nextIndex > 1 ? `${baseId}-${nextIndex}` : baseId,
        sequence: index + 1,
        name,
        years,
      };
    });
})();
