export default function MakeResult ({record}) {
  const result = [0, 0, 0, 0]

  var i, j;
  for (i=0;i<12;i++){
    for (j=0;j<4;j++){
      result[j] += record[i][j]
    }
  }
  for (j=0;j<4;j++){
    result[j] = result[j]>0?1:0;
  }

  return 8*result[0]+4*result[1]+2*result[2]+result[3]
}