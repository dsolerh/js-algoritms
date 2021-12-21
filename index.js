// const { CacheManager } = require("ds-cache-manager");
// CacheManager.setSize(5);

// CacheManager.set("test", "d1", { a: 1, b: 1 });
// CacheManager.set("test", "d2", { a: 2, b: 2 });
// CacheManager.set("test", "d3", { a: 3, b: 3 });
// CacheManager.set("test", "d4", { a: 4, b: 4 });

// require("./other");

// console.log("🚀 ~ file: index.js ~ line 5 ~ CacheManager", CacheManager);

// function Daniel() {
//     console.log(cache);
//     var cache;
//     cache = 'daniel';
// }

// Daniel();

/* let a = [1, 2, 3, 4, 4, 5, 6, 7];
let b = a;
b[1] = 21;
console.log(a, b);
 */

/* class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Solution {
  constructor() {
    this.insert = function (head, data) {
      //complete this method
      //   console.log(head);
      if (head) {
        // const node = new Node(data);
        // node.next = head;
        head.next = this.insert(head.next, data);
        return head;
      } else {
        return new Node(data);
      }
    };

    this.display = function (head) {
      var start = head;
      while (start) {
        process.stdout.write(start.data + " ");
        start = start.next;
      }
    };
  }
}
function main() {
  var T = 4;
  const _d = [2, 3, 4, 1];
  var head = null;
  var mylist = new Solution();
  for (i = 0; i < T; i++) {
    var data = _d[i];
    head = mylist.insert(head, data);
  }
  mylist.display(head);
}

main();
 */

// function splitLines(text, width) {
//   if (text.length < width) {
//     return [text, 1];
//   }
//   let i = width;
//   do {
//     if (text[i] === ' ') {
//       const [nextL, n] = splitLines(text.substr(i+1), width);
//       return [text.substr(0, i) + '\n' + nextL, n + 1];
//     }
//     i++;
//   } while (text[i]);
//   i = width;
//   do {
//     if (text[i] === ' ') {
//       const [nextL, n] = splitLines(text.substr(i+1), width);
//       return [text.substr(0, i) + '\n' + nextL, n + 1];
//     }
//     i--;
//   } while (text[i]);
//   return [text, 1];
// }

// let text = splitLines('danielsolerhernandez', 5);
// console.log("🚀 ~ file: index.js ~ line 88 ~ text", text)

// const d = [1,2,3,4,5,6];
// for (const e of d) {
//   d.unshift();
//   console.log(e);
// }
// let d = Date.now();
// const promises = Array(1000)
//   .fill(0)
//   .map(async (x) => {
//     for (let i = 0; i < 1000; i++) {
//       x += i;
//     }
//     return x;
//   });
// Promise.all(promises).then((val) => {
//   const elapsed = Date.now() - d;
//   console.log(
//     "🚀 ~ file: index.js ~ line 114 ~ Promise.all ~ elapsed",
//     elapsed
//   );
// });

// d = Date.now();
// Array(1000)
//   .fill(0)
//   .map((x) => {
//     for (let i = 0; i < 1000; i++) {
//       x += i;
//     }
//     return x;
//   });
// const elapsed = Date.now() - d;
// console.log("🚀 ~ file: index.js ~ line 129 ~ elapsed", elapsed);
let f, elapsed;

// d = Date.now();
// let regex = new RegExp(`^\w$`);
// Array(100000)
//   .fill("sadsdhasldandkqwdiqlwdbjhdbqwldbqjhwddjqlkwjdlkqwdn")
//   .forEach((x) => {
//     x.match(regex);
//   });
// elapsed = Date.now() - d;
// console.log("🚀 ~ file: index.js ~ line 134 ~ elapsed", elapsed);

// d = Date.now();
// Array(100000)
//   .fill("sadsdhasldandkqwdiqlwdbjhdbqwldbqjhwddjqlkwjdlkqwdn")
//   .forEach((x) => {
//     x.match(/^\w$/);
//   });
// elapsed = Date.now() - d;
// console.log("🚀 ~ file: index.js ~ line 134 ~ elapsed", elapsed);

const gone = [
  125023, 153242, 155590, 155582, 125024, 153267, 155591, 155575, 125026,
  155583, 155592, 153278, 167459, 155577, 155588, 150934, 150949, 155602,
  150917, 151002, 153295, 155580, 155594, 150969, 150938, 155608, 155336,
  150955, 153298, 155581, 155600, 150990, 155611, 150957, 155341, 150984,
  150989, 153310, 155584, 150970, 155604, 155613, 151009, 155385, 150968,
  151008, 151685, 153337, 155587, 150972, 151224, 155607, 155615, 151211,
  151656, 159733, 150985, 151688, 151233, 155593, 151231, 150997, 155627,
  155610, 151212, 151222, 151675, 151217, 151671, 151214, 151699, 151251,
  151256, 155595, 155633, 155620, 150923, 151226, 150918, 151245, 151680,
  151219, 151240, 151673, 151700, 148685, 148681, 148710, 151258, 151259,
  155598, 148675, 148683, 148678, 148694, 155634, 150963, 155625, 151227,
  151248, 150921, 151686, 151243, 151223, 151684, 148720, 151721, 148684,
  151262, 148733, 151285, 155601, 148765, 148677, 148730, 148701, 150966,
  148679, 155632, 151228, 151273, 150922, 148674, 151252, 151694, 151225,
  150378, 150381, 148739, 151692, 151723, 152161, 148687, 148779, 150398,
  152166, 155605, 154634, 150377, 148776, 148693, 150401, 148707, 150975,
  148696, 155636, 151229, 152167, 150954, 151253, 148682, 151705, 150379,
  150422, 151238, 148751, 150387, 151698, 152193, 151740, 150392, 148695,
  152168, 150425, 154639, 155606, 154627, 150395, 150411, 148698, 150976,
  148725, 148703, 155637, 151230, 152232, 152164, 151658, 154691, 151706,
  150434, 150384, 148754, 151249, 150388, 152242, 151744, 155311, 153244,
  153249, 153234, 150416, 148702, 152172, 154651, 150444, 154632, 155612,
  150413, 150409, 148715, 151001, 153255, 148756, 148724, 155638, 151239,
  152181, 156071, 151696, 154711, 150463, 151707, 150386, 148768, 153236,
  151263, 156049, 150391, 155377, 150915, 155320, 153261, 153240, 153250,
  150426, 148709, 154700, 152173, 150462, 154636, 155614, 150420, 152243,
  150461, 151659, 148716, 153281, 148690, 148771, 155648, 148726, 150407,
  151250, 152188, 156079, 151738, 151713, 154713, 150468, 151711, 150393,
  154643, 150943, 153239, 156055, 151267, 150933, 150394, 153272, 155356,
  153243, 150456, 153315, 154701, 148727, 150482, 152174, 154645, 150446,
  155617, 156070, 151667, 150475, 153293, 148718, 148691, 148772, 155649,
  152482, 154633, 152189, 151254, 155371, 156080, 154720, 150473, 151712,
  154647, 150397, 155361, 156064, 153241, 150940, 151272, 153284, 150396,
  153245, 155366, 150465, 154703, 152530, 148728, 154650, 152176, 150450,
  155621, 151668, 156076, 152466, 153323, 148731, 148697, 148773, 155653,
  152512, 152192, 154642, 151264, 152438, 156096, 154653, 151718, 150408,
  156066, 155387, 150942, 153247, 153286, 151277, 153262, 150402, 152433,
  155369, 154652, 148743, 150454, 152177, 155624, 151679, 152492, 153324,
  148758, 148699, 154646, 155657, 152195, 152523, 154669, 152472, 151268,
  154670, 156122, 151726, 156072, 150424, 150948, 153297, 153248, 153268,
  151283, 152441, 150404, 154688, 155390, 150466, 148745, 152203, 151724,
  155628, 152495, 148770, 148717, 154654, 152217, 155662, 156862, 152481,
  154673, 151271, 156140, 156077, 151745, 150959, 150441, 153305, 153277,
  153266, 152443, 154698, 150405, 150469, 148761, 151729, 152206, 152502,
  155629, 154693, 148719, 152219, 154655, 156864, 155664, 152496, 154676,
  156085, 151274, 150962, 151749, 153309, 150474, 153285, 152444, 153274,
  154706, 150478, 150415, 151737, 148764, 152207, 152522, 155630, 154705,
  152240, 148723, 152539, 154656, 154680, 156092, 150965, 151279, 153314,
  150479, 153289, 152452, 154721, 153306, 150480, 151746, 150432, 148767,
  152211, 152527, 156051, 155635, 156824, 148732, 154681, 154664, 156116,
  150982, 152182, 153325, 153292, 152445, 152463, 150481, 153311, 155312,
  150433, 152212, 156054, 152528, 156832, 155640, 154708, 148734, 156130,
  154671, 150992, 153296, 152197, 152446, 152471, 150484, 155318, 153319,
  150437, 156060, 152213, 156813, 156859, 154712, 155644, 156133, 148763,
  151664, 154677, 153301, 152198, 152475, 152449, 152435, 155324, 153322,
  150443, 156069, 156858, 152220, 156877, 154714, 156141, 155646, 151666,
  148775, 153318, 154678, 152478, 152204, 152436, 152486, 155330, 153327,
  156088, 150447, 156883, 156893, 152222, 154726, 151678, 155650, 152480,
  148778, 152440, 156121, 155346, 152490, 156091, 150449, 156901, 156887,
  151709, 152228, 152485, 155651, 152442, 154687, 155351, 156095, 152506,
  156892, 150451, 151717, 152489, 152231, 152447, 155654, 155352, 154709,
  156102, 156810, 156918, 151731, 150459, 152494, 152454, 152233, 155373,
  155655, 156105, 154723, 156820, 151735, 156933, 152499, 150464, 152487,
  155381, 152234, 156113, 155656, 154729, 151743, 156821, 152500, 152488,
  155382, 156124, 152238, 154731, 155658, 155321, 156838, 152501, 152507,
  155384, 156128, 156052, 154732, 155325, 155659, 152504, 156855, 152509,
  156129, 155339, 156057, 152505, 155660, 152510, 156880, 156137, 155355,
  156059, 152511, 152524, 155661, 156908, 156138, 155359, 152514, 156081,
  152525, 156910, 156139, 155362, 152516, 152536, 156100, 156911, 155372,
  152518, 152538, 156104, 152520, 156924, 156833, 156107, 152521, 156843,
  152526, 156108, 156850, 152529, 156907, 156110, 156812, 156114, 156823,
  156119, 156826, 156123, 156829, 156125, 156835, 156126, 156851, 156131,
  156852, 156132, 156853, 156134, 156854, 156142, 156856, 156865, 156867,
  156873, 156875, 156876, 156889, 156898, 156900, 156916, 156917, 156927,
  156928, 156930, 156932, 156934,
];
console.log("🚀 ~ file: index.js ~ line 229 ~ gone.length", gone.length);
const stay = [
  125004, 153358, 155695, 155679, 125010, 153409, 155697, 155665, 125014,
  155681, 155699, 153431, 129296, 155669, 155691, 151056, 151086, 155719,
  151021, 151192, 153465, 155675, 155703, 151126, 151064, 155731, 155462,
  151098, 153471, 155677, 155715, 151168, 155737, 151102, 155472, 151156,
  151166, 153496, 155683, 151128, 155723, 155741, 151206, 155563, 151124,
  151204, 151810, 153550, 155689, 151132, 151312, 155729, 155745, 151286,
  151750, 159728, 151158, 151816, 151330, 155701, 151326, 151182, 155770,
  155735, 151288, 151308, 151789, 151298, 151781, 151292, 151838, 151367,
  151377, 155705, 155782, 155756, 151033, 151316, 151023, 151355, 151800,
  151302, 151345, 151785, 151840, 148803, 148795, 148854, 151381, 151383,
  155711, 148783, 148799, 148789, 148821, 155784, 151114, 155766, 151318,
  151361, 151029, 151812, 151351, 151310, 151808, 148874, 151883, 148801,
  151389, 148903, 151436, 155717, 148968, 148787, 148897, 148835, 151120,
  148791, 155780, 151320, 151412, 151031, 148781, 151369, 151828, 151314,
  150490, 150496, 148915, 151824, 151887, 152250, 148807, 148996, 150531,
  152260, 155725, 154749, 150488, 148990, 148819, 150537, 148847, 151138,
  148825, 155788, 151322, 152262, 151096, 151371, 148797, 151851, 150492,
  150580, 151341, 148939, 150508, 151836, 152316, 151921, 150518, 148823,
  152265, 150587, 154759, 155727, 154735, 150525, 150557, 148829, 151140,
  148886, 148839, 155790, 151324, 152394, 152256, 151754, 154867, 151853,
  150605, 150502, 148945, 151363, 150510, 152414, 151929, 155409, 153362,
  153372, 153342, 150567, 148837, 152273, 154785, 150625, 154745, 155739,
  150561, 150553, 148864, 151190, 153385, 148949, 148882, 155792, 151343,
  152291, 156188, 151832, 154907, 150663, 151855, 150506, 148974, 153346,
  151392, 156144, 150516, 155547, 151017, 155429, 153397, 153354, 153374,
  150589, 148851, 154885, 152275, 150661, 154753, 155743, 150575, 152416,
  150659, 151756, 148866, 153437, 148813, 148980, 155812, 148888, 150549,
  151365, 152305, 156204, 151917, 151867, 154911, 150673, 151863, 150520,
  154768, 151074, 153352, 156156, 151400, 151054, 150523, 153419, 155503,
  153360, 150649, 153506, 154887, 148890, 150701, 152277, 154773, 150629,
  155750, 156186, 151773, 150687, 153461, 148870, 148815, 148982, 155814,
  152640, 154747, 152307, 151373, 155534, 156206, 154927, 150683, 151865,
  154777, 150529, 155513, 156174, 153356, 151068, 151410, 153443, 150527,
  153364, 155523, 150667, 154891, 152740, 148892, 154783, 152281, 150637,
  155758, 151775, 156198, 152608, 153522, 148899, 148827, 148984, 155822,
  152703, 152313, 154766, 151394, 152552, 156239, 154789, 151877, 150551,
  156178, 155567, 151072, 153368, 153447, 151420, 153399, 150539, 152542,
  155529, 154787, 148923, 150645, 152283, 155764, 151797, 152661, 153524,
  148954, 148831, 154775, 155830, 152320, 152725, 154822, 152620, 151402,
  154825, 156292, 151893, 156190, 150584, 151084, 153469, 153370, 153411,
  151432, 152558, 150543, 154861, 155573, 150669, 148927, 152336, 151889,
  155772, 152667, 148978, 148868, 154791, 152364, 155840, 157039, 152638,
  154831, 151408, 156328, 156200, 151931, 151106, 150619, 153485, 153429,
  153407, 152562, 154881, 150545, 150675, 148960, 151899, 152342, 152681,
  155774, 154871, 148872, 152368, 154793, 157043, 155844, 152669, 154837,
  156216, 151414, 151112, 151939, 153494, 150685, 153445, 152564, 153423,
  154897, 150693, 150565, 151915, 148966, 152344, 152723, 155776, 154895,
  152410, 148880, 152758, 154795, 154845, 156231, 151118, 151424, 153504,
  150695, 153453, 152580, 154929, 153488, 150697, 151933, 150601, 148972,
  152352, 152734, 156148, 155786, 156963, 148901, 154847, 154812, 156280,
  151152, 152293, 153526, 153459, 152566, 152602, 150699, 153498, 155411,
  150603, 152354, 156154, 152736, 156979, 155796, 154901, 148905, 156308,
  154827, 151172, 153467, 152324, 152568, 152618, 150706, 155424, 153514,
  150611, 156166, 152356, 156941, 157033, 154909, 155804, 156314, 148964,
  151766, 154839, 153477, 152326, 152626, 152574, 152546, 155437, 153520,
  150623, 156184, 157031, 152370, 157071, 154913, 156331, 155808, 151771,
  148988, 153512, 154841, 152632, 152338, 152548, 152648, 155450, 153530,
  156222, 150631, 157083, 157104, 152374, 154939, 151795, 155816, 152636,
  148994, 152556, 156290, 155483, 152657, 156229, 150635, 157121, 157091,
  151859, 152386, 152646, 155818, 152560, 154859, 155493, 156237, 152690,
  157102, 150639, 151875, 152655, 152392, 152570, 155824, 155495, 154903,
  156251, 156935, 157155, 151903, 150655, 152665, 152584, 152396, 155538,
  155826, 156257, 154933, 156955, 151911, 157185, 152675, 150665, 152651,
  155555, 152398, 156274, 155828, 154946, 151927, 156957, 152677, 152653,
  155557, 156296, 152406, 154950, 155832, 155431, 156991, 152679, 152692,
  155561, 156304, 156150, 154952, 155439, 155834, 152686, 157025, 152697,
  156306, 155468, 156160, 152688, 155836, 152699, 157077, 156322, 155501,
  156164, 152701, 152727, 155838, 157135, 156324, 155509, 152707, 156208,
  152729, 157139, 156326, 155515, 152711, 152752, 156247, 157141, 155536,
  152715, 152756, 156255, 152719, 157167, 156981, 156262, 152721, 157001,
  152732, 156264, 157015, 152738, 157133, 156268, 156939, 156276, 156961,
  156286, 156967, 156294, 156973, 156298, 156985, 156300, 157017, 156310,
  157019, 156312, 157021, 156316, 157023, 156333, 157027, 157045, 157049,
  157063, 157067, 157069, 157095, 157115, 157119, 157151, 157153, 157173,
  157175, 157179, 157183, 157187,
];
console.log("🚀 ~ file: index.js ~ line 307 ~ stay.length", stay.length);
