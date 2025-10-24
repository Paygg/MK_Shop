let list = ["เนื้อสัตว์", "ผัก", "เครื่องดื่ม"];

const typeParse = (type) => {
  return list[Number(type) - 1];
};

module.exports = {
  typeParse,
};
