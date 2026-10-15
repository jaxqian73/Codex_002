export type Stock = { symbol: string; name: string; price: number; change: number; cap: string; color: string };
export const stocks: Stock[] = [
{symbol:'AAPL',name:'Apple Inc.',price:227.63,change:1.24,cap:'3.42T',color:'#777d87'},
{symbol:'MSFT',name:'Microsoft Corporation',price:428.76,change:0.86,cap:'3.19T',color:'#5b9fe2'},
{symbol:'NVDA',name:'NVIDIA Corporation',price:138.85,change:2.71,cap:'3.40T',color:'#8bbf56'},
{symbol:'GOOGL',name:'Alphabet Inc.',price:176.33,change:-0.42,cap:'2.17T',color:'#dfaa55'},
{symbol:'VOO',name:'Vanguard S&P 500 ETF',price:537.48,change:0.72,cap:'ETF · —',color:'#bf7474'},
{symbol:'QQQM',name:'Invesco NASDAQ 100 ETF',price:211.32,change:1.16,cap:'ETF · —',color:'#9583d4'},
{symbol:'VT',name:'Vanguard Total World Stock ETF',price:119.65,change:0.38,cap:'ETF · —',color:'#54a995'},
{symbol:'AMZN',name:'Amazon.com Inc.',price:202.61,change:-0.68,cap:'2.13T',color:'#dc9c4d'},
{symbol:'META',name:'Meta Platforms Inc.',price:589.12,change:1.32,cap:'1.49T',color:'#6f90dc'},
{symbol:'TSLA',name:'Tesla Inc.',price:248.50,change:-1.83,cap:'793B',color:'#cf7373'}];
export type Holding = { id: string; symbol: string; quantity: number; buyPrice: number };
export const money = (n: number) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n);
export function holdingValue(h: Holding) { const cost=h.quantity*h.buyPrice; const value=h.quantity*(stocks.find(s=>s.symbol===h.symbol)?.price??0); return {cost,value,profit:value-cost,rate:cost?(value-cost)/cost*100:0}; }
export function compound(initial:number, monthly:number, years:number, annual:number) {
 const rate=annual/100/12; let balance=initial; const points=[{year:0,balance:initial,invested:initial}];
 for(let m=1;m<=years*12;m++){balance=balance*(1+rate)+monthly;if(m%12===0)points.push({year:m/12,balance,invested:initial+monthly*m});} return points;
}
export const lessons = [
{term:'Stocks',title:'股票是什么？',tag:'投资基础',text:'股票（Stock）代表一家公司的部分所有权。股东可能获得股息（Dividend），也会承担股价下跌的风险。价格上涨不等于企业价值一定增长。',tip:'先了解公司如何赚钱，再考虑价格是否合理。'},
{term:'ETF',title:'一篮子资产，一次投资',tag:'投资基础',text:'交易所交易基金（Exchange-Traded Fund）将多项资产组合在一起，并像股票一样交易。VOO 跟踪标普 500，QQQM 跟踪纳斯达克 100，VT 覆盖全球股票。ETF 仍会亏损，费用率和持仓集中度也值得关注。',tip:'比较 Expense Ratio（费用率）、跟踪指数与资产配置。'},
{term:'P/E Ratio',title:'市盈率能告诉你什么？',tag:'公司分析',text:'市盈率（Price-to-Earnings Ratio）= 股价 ÷ 每股收益。它表示投资者愿意为每一美元盈利支付多少价格。低 P/E 不一定便宜；公司亏损时，该指标通常不适用。',tip:'在相同行业中比较，并结合增长和负债分析。'},
{term:'EPS',title:'每股收益，看懂企业盈利',tag:'公司分析',text:'每股收益（Earnings Per Share）= 归属于普通股股东的净利润 ÷ 加权平均流通股数。稀释每股收益（Diluted EPS）会考虑潜在新增股份。回购、一次性收入都可能影响 EPS。',tip:'观察多年的趋势，而非只看一个季度。'},
{term:'Free Cash Flow',title:'自由现金流：真正留下的钱',tag:'公司分析',text:'自由现金流（FCF）常用经营活动现金流减去资本支出来估算，反映维持和扩张业务后可支配的现金。不同公司的定义可能不同，单年负值也不一定代表经营失败。',tip:'结合现金流量表、资本支出和行业特点判断。'},
{term:'Compounding',title:'让时间成为你的伙伴',tag:'长期投资',text:'复利（Compound Interest）指收益继续参与产生收益。持续投入和足够长的时间能放大复利效应，但市场回报并不稳定，损失同样会累积。',tip:'用复利计算器比较情景，避免把假设当作承诺。'},
{term:'Risk Management',title:'先管理风险，再追求收益',tag:'长期投资',text:'风险管理包括分散投资（Diversification）、控制仓位、保留应急资金，以及根据投资期限选择资产。分散不能消除市场风险，历史业绩也无法保证未来收益。',tip:'不使用短期生活所需资金投资高波动资产。'}];
