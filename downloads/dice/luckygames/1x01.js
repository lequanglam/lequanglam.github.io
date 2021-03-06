// 4C 51 4C 27 73 20 43 6F 64 65                                     
// 53 63 72 69 70 74 20 49 44 3A 20 30 78 30 36                        
// 43 6F 70 79 72 69 67 68 74 20 28 43 29 20 4C 51 4C 20 2D 20 32 30 31 38 
//
// TFFMJ3MgQ29kZQ0KU2NyaXB0IElEOiAweDA2DQpDb3B5cmlnaHQgKEMpIExRTCAtIDIwMTg=
// SIG: f3b5974f521ca8d3116fc6dbfb7ae29a762c80da
// TIM: 1540110536

var SCRIPTID = window.atob("MXgwMQ");
var TIME = 1540110536;
var TIMES = new Date(TIME * 1000);
var SIG = "f3b5974f521ca8d3116fc6dbfb7ae29a762c80da".toUpperCase();

// LIBLOADZONE
Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

function randomInt(min, max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
// END LIBLOADZONE

// CLOSE SOCKET LUCKYGAMES
socket.id.onclose = function() {};
socket.id.close();
// END CLOSE SOCKET LUCKYGAMES

// SIG DATA
$('#body').css('background-image', 'url(https://images.emojiterra.com/google/android-pie/512px/1f171.png)');
$('#body').css('background-size', 'contains');
$('#body').css('background-position', 'center');
$('#body').css('background-repeat', 'no-repeat');

$('#main').css('min-width', '100%');
$('#header').css('display', 'none');
$('#news').css('display', 'none');
$('#content').css('background', 'none');
$('#gameContainer').html('<br><span id="notification">...</span><br><br> <span style="float: left;"><input id="basebetAmount" value="0.00000001" style="background: none; text-align: center; color: #fff; border: 1px solid #fff;" placeholder="basebetAmount" autocomplete="off"> <input id="overBalance" value="10%" style="background: none; text-align: center; color: #fff; border: 1px solid #fff;" placeholder="overBalance" autocomplete="off"> <input id="underBalance" value="0.00000000" style="background: none; text-align: center; color: #fff; border: 1px solid #fff;" placeholder="underBalance" autocomplete="off"></span> <span style="float: right;"><button id="min" onclick="min();" style="border: 1px solid #fff; padding: 2px;">min</button> <button id="play" style="border: 1px solid #fff; padding: 2px;">start</button> <button id="reset" onclick="reset();" style="border: 1px solid #fff; padding: 2px;">reset</button> <button id="showChart" style="border: 1px solid #fff; padding: 2px;">showChart</button> <button id="showStatic" style="border: 1px solid #fff; padding: 2px;">showStatic</button></span><br><br> <div id="chart" style="height: 320px;"></div><br> <div id="static">@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</div>');
$('#gameContainer').css('width', '75%');
$('#gameContainer').css('height', '100%');
$('#gameContainer').css('color', '#fff');
$('#gameContainer').css('font-size', '16px');
$('#gameContainer').css('margin', 'auto');
$('#gameContainer').css('padding', '0px');
$('#notification').html('SIG = ' + SIG + ' - PROGRAM LOADED');
$('#static').css('text-align', 'center');
$('#controlContainer').css('display', 'none');
$('#listContainer').css('display', 'none');
$('#frontText').css('display', 'none');
$('#footer').css('display', 'none');
$('#static').html('@@@@@@@@@@@@@@@@@@@@');
document.getElementById('chart').hidden = false;
document.getElementById('static').hidden = false;
randomizeSeed();
console.clear();
var run = false;
hideChart = false;
hideStatic = false;
basebetAmount = 0;
betAmount = 0;
maxbetAmount = 0;
prediction = 0;
direction = '';
balance = 0;
overBalance = 0;
underBalance = 0;
bet = 0;
win = 0;
lose = 0;
winStreak = 0;
loseStreak = 0;
maxWinStreak = 0;
maxLoseStreak = 0;
wagered = 0;
profitWagered = 0;
profit = 0;
largestProfit = 0;
startTime = new Date();
onTime = 0;
playTime = 0;
playDay = 0;
playHour = 0;
playMinute = 0;
playSecond = 0;
speed = 0;
round = 0;
dsp = [];
chart = '';
color = '';
numx = 0;
predictionx = 0;
function reloadChart() {
	$.getScript('https://canvasjs.com/assets/script/canvasjs.min.js').done(function (script, textStatus) {
		dps = [{
				x: 0,
				y: 0
			}
		];
		chart = new CanvasJS.Chart('chart', {
			theme: 'light2',
			zoomEnabled: true,
			axisX: {
				title: 'BET',
				includeZero: false,
			},
			axisY: {
				title: 'PROFIT',
				includeZero: false,
			},
			title: {
				text: 'LQL\'s Code - Script ID ' + SCRIPTID + ' - Created time: ' + TIMES.getDate().pad() + "/" + TIMES.getMonth().pad() + "/" + TIMES.getFullYear() + " " + TIMES.getHours().pad() + ":" + TIMES.getMinutes().pad() + ":" + TIMES.getSeconds().pad() + " " + ((TIMES.getTimezoneOffset() / 60 > 0) ? "-" : "+") + Math.abs(TIMES.getTimezoneOffset() / 60).pad() + (((TIMES.getTimezoneOffset() / 60) % 1 == 0.5) ? ":30" : ":00"),
				fontColor: '#6d49d8',
				fontSize: 2e1,
				padding: 2e1
			},
			data: [{
					type: 'stepLine',
					dataPoints: dps
				}
			]
		});
		chart.render();
	});
}

reloadChart();

function updateChart(bet, profit, color) {
	dps.push({
		x: bet,
		y: profit,
		color: color
	});
	if (dps[dps.length - 2]) {
		dps[dps.length - 2].lineColor = color;
	}
	if (dps.length > 1e3) {
		dps.shift();
	}
	chart.render();
}
function min() {
	$('#basebetAmount').val((0.00000001).toFixed(8));
}
$('#play').on('click', function () {
	run == true ? play(this, "start", false, false) : play(this, "stop", true, true);
	basebetAmount = parseFloat($('#basebetAmount').val());
	if ($('#overBalance').val().includes("%")) {
		if (balance != 0) {
			overBalance = balance * parseFloat($('#overBalance').val().replace("%", ""));
		} else {
			jQuery.ajax({
				url: "https://play.luckygames.io/ajx/",
				type: "POST",
				dataType: "html",
				timeout: 6e4,
				data: {
					game: "dice",
					coin: $('#coin').val(),
					session: getCookie("SESSION"),
					betAmount: 1e-8,
					prediction: 98,
					direction: "under",
					clientSeed: $('#clientSeed').val(),
					serverSeedHash: $('#serverSeedHash').html(),
					action: "playBet",
					hash: user.hash
				},
				success: function (data) {
					var data = JSON.parse(data);
					$('#serverSeedHash').html(data.serverSeedHash);
					balance = parseFloat(data.balance);
					overBalance = balance * (1 + parseFloat($('#overBalance').val().replace("%", "")) / 100);
					underBalance = parseFloat($('#underBalance').val());
					betAmount = basebetAmount;
					direction = "over";
					predictionx = 80;
					$('#basebetAmount').val(basebetAmount.toFixed(8));
					$('#overBalance').val(overBalance.toFixed(8));
					$('#underBalance').val(underBalance.toFixed(8));
					doBet();
				}
			});
		}
	} else {
		overBalance = parseFloat($('#overBalance').val());
		underBalance = parseFloat($('#underBalance').val());
		betAmount = basebetAmount;
		direction = "over";
		predictionx = 80;
		$('#basebetAmount').val(basebetAmount.toFixed(8));
		$('#overBalance').val(overBalance.toFixed(8));
		$('#underBalance').val(underBalance.toFixed(8));
		doBet();
	}
	
});
function play(e, d, v) {
	$(e).html(d);
	run = v;
	$('#basebetAmount').prop('disabled', v);
	$('#overBalance').prop('disabled', v);
	$('#underBalance').prop('disabled', v);
	$('#min').prop('disabled', v);
	$('#reset').prop('disabled', v);
}
$('#showChart').on('click', function () {
	hideChart == true ? showChart(this, "hideChart", false) : showChart(this, "showChart", true);
});
function showChart(e, d, v) {
	$(e).html(d);
	hideChart = v;
	document.getElementById('chart').hidden = v;
}
$('#showStatic').on('click', function () {
	hideStatic == true ? showStatic(this, "hideStatic", false) : showStatic(this, "showStatic", true);
});
function showStatic(e, d, v) {
	$(e).html(d);
	hideStatic = v;
	document.getElementById('static').hidden = v;
}
function reset() {
	randomizeSeed();
	basebetAmount = 0;
	betAmount = 0;
	maxbetAmount = 0;
	prediction = 0;
	direction = '';
	balance = 0;
	overBalance = 0;
	underBalance = 0;
	bet = 0;
	win = 0;
	lose = 0;
	winStreak = 0;
	loseStreak = 0;
	maxWinStreak = 0;
	maxLoseStreak = 0;
	wagered = 0;
	profitWagered = 0;
	profit = 0;
	largestProfit = 0;
	startTime = new Date();
	onTime = 0;
	playTime = 0;
	playDay = 0;
	playHour = 0;
	playMinute = 0;
	playSecond = 0;
	speed = 0;
	round = 0;
	dsp = [];
	chart = '';
	color = '';
	numx = 0;
	reloadChart();
	$('#notification').html('SIG = ' + SIG + ' - PROGRAM RESTARTED');
	$('#static').html('@@@@@@@@@@@@@@@@@@@@');
	return;
}
function doBet() {
	if (run === true) {
        try {
			//console.log(betAmount + "-" + balancelose);
			if (direction == "over") {
				prediction = 99 - predictionx;
			} else {
				prediction = predictionx;
			}
			jQuery.ajax({
				url: "https://play.luckygames.io/ajx/",
				type: "POST",
				dataType: "html",
				timeout: 6e4,
				data: {
					game: "dice",
					coin: $('#coin').val(),
					session: getCookie("SESSION"),
					betAmount: betAmount,
					prediction: prediction,
					direction: direction,
					clientSeed: $('#clientSeed').val(),
					serverSeedHash: $('#serverSeedHash').html(),
					action: "playBet",
					hash: user.hash
				},
				success: function (data) {
					var data = JSON.parse(data);
					if (data.result === true) {
						//console.log(balancelose);
						$('#notification').html('D/P = ' + direction + ' ' + prediction + ' | numx = ' + numx);
						(randomInt(0,1) == 0) ? direction = "under" : direction = "over";
						predictionx = randomInt(75, 85);
						bet++;
						onTime = new Date().getTime();
						playTime = onTime - startTime;
						playDay = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24)).pad();
						playHour = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1)).pad();
						playMinute = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1)).pad();
						playSecond = Math.floor((playTime % (1e3 * 6e1)) / 1e3).pad();
						speed = parseFloat((bet / playTime) * 1e3);
						balance = parseFloat(data.balance);
						wagered += parseFloat(betAmount);
						profit += parseFloat(data.profit);
						profitWagered = (wagered * 0.1) / 1e2;
						if (profit > largestProfit) {
							largestProfit = profit;
						}
						if (data.gameResult === 'win') {
							win++;
							winStreak++;
							loseStreak = 0;
							color = 'green';
							numx++;
							if (numx > 3) {
								numx = 0;
								betAmount = basebetAmount;
							} else {
								betAmount *= 2;
							}
						} else {
							lose++;
							loseStreak++;
							winStreak = 0;
							color = 'red';
							numx = 0;
							betAmount *= 2;
						}
						if (winStreak >= maxWinStreak) {
							maxWinStreak = winStreak;
						}
						if (loseStreak >= maxLoseStreak) {
							maxLoseStreak = loseStreak;
						}
						if (betAmount >= maxbetAmount) {
							maxbetAmount = betAmount;
						}
						$('#serverSeedHash').html(data.serverSeedHash);
						$('#static').html('<span style="float: left;">time = ' + playDay + ':' + playHour + ':' + playMinute + ':' + playSecond + '</span> <span style="float: right;">speed = ' + speed.toFixed(2) + '</span><br> <span style="float: left;">balance = ' + balance.toFixed(8) + '</span> <span style="float: right;">profit = ' + profit.toFixed(8) + '</span><br> <span style="float: left;">wagered = ' + wagered.toFixed(8) + '</span> <span style="float: right;">maxbetAmount = ' + maxbetAmount.toFixed(8) + '</span><br> <span style="float: left;">winStreak = ' + winStreak + '</span> <span style="float: right;">loseStreak = ' + loseStreak + '</span><br> <span style="float: left;">maxWinStreak = ' + maxWinStreak + '</span> <span style="float: right;">maxLoseStreak = ' + maxLoseStreak + '</span><br> <span style="float: left;">win = ' + win + '</span> <span style="float: right;">lose = ' + lose + '</span><br> <span style="float: left;">bet = ' + bet + '</span> <span style="float: right;">rolled = ' + data.resultNumber + '</span>');
						updateChart(bet, profit, color);
						if (betAmount >= balance) {
							stop();
							$('#notification').html('You lose');
							return;
						} else {
							if (overBalance != 0 && balance >= overBalance) {
								stop();
								$('#notification').html('Over balance');
								return;
							} else if (underBalance != 0 && balance <= underBalance) {
								stop();
								$('#notification').html('Under balance');
								return;
							}
						}
						doBet();
					} else {
						randomizeSeed();
						setInterval(doBet(), 1e3);
					}
				},
				error: function (xhr, ajaxOptions, throwagerednError) {
					randomizeSeed();
					setTimeout(doBet(), 1e3);
				},
				timeout: function (xhr, ajaxOptions, throwagerednError) {
					randomizeSeed();
					setTimeout(doBet(), 1e3);
				},
				abetort: function (xhr, ajaxOptions, throwagerednError) {
					randomizeSeed();
					setTimeout(doBet(), 1e3);
				}
			});
        } catch (exc) {
            $('#notification').html('Error: ' + exc + '. Retrying in 15 sec...');
            setTimeout(doBet(), 15000);
        }
	} else {
		$('#notification').html('Bot has stopped');
		return;
	}
}
