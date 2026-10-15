import { describe,it,expect } from 'vitest';
import { compound,holdingValue } from './finance';
describe('投资计算',()=>{
 it('按模拟价格计算持仓成本、市值和收益',()=>{const v=holdingValue({id:'1',symbol:'AAPL',quantity:10,buyPrice:200});expect(v.cost).toBe(2000);expect(v.value).toBeCloseTo(2276.3);expect(v.profit).toBeCloseTo(276.3);expect(v.rate).toBeCloseTo(13.815);});
 it('零收益率下等于本金加每月投入',()=>{expect(compound(1000,100,2,0).at(-1)?.balance).toBe(3400)});
 it('符合月末投入的复利公式',()=>{const r=.07/12;const expected=10000*(1+r)**240+500*((1+r)**240-1)/r;expect(compound(10000,500,20,7).at(-1)?.balance).toBeCloseTo(expected,5)});
 it('负收益率下可以亏损',()=>{expect(compound(10000,0,1,-10).at(-1)!.balance).toBeLessThan(10000)});
});
