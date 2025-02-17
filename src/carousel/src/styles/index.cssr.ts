import { c, cB, cE, cM } from '../../../_utils/cssr'

// vars:
// --bezier
// --dot-color
// --dot-color-active
// --dot-size
export default cB('carousel', `
  overflow: hidden;
  position: relative;
`, [
  cE('slides', `
    transition: transform .3s var(--bezier);
    display: flex;
  `, [
    c('> div', `
      overflow: hidden;
    `, [
      c('> img', `
        display: block;
      `)
    ])
  ]),
  cE('dots', `
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
  `),
  cE('dot', `
    height: var(--dot-size);
    width: var(--dot-size);
    background-color: var(--dot-color);
    border-radius: 50%;
    cursor: pointer;
    transition:
      box-shadow .3s var(--bezier),
      background-color .3s var(--bezier);
    outline: none;
  `, [
    c('&:focus', `
      background-color: var(--dot-color-active);
    `),
    cM('active', `
      background-color: var(--dot-color-active);
    `),
    c('&:last-child', `
      margin-right: 0;
    `)
  ]),
  cM('left', [
    cE('slides', `
      flex-direction: column;
    `),
    cE('dots', `
      transform: translateY(-50%);
      top: 50%;
      left: 16px;
      flex-direction: column;
    `),
    cE('dot', `
      margin-bottom: 12px;
    `)
  ]),
  cM('right', [
    cE('slides', `
      flex-direction: column;
    `),
    cE('dots', `
      transform: translateY(-50%);
      top: 50%;
      right: 16px;
      flex-direction: column;
    `),
    cE('dot', `
      margin-bottom: 12px;
    `)
  ]),
  cM('top', [
    cE('dots', `
      transform: translateX(-50%);
      top: 16px;
      left: 50%;
    `),
    cE('dot', `
      margin-right: 12px;
    `)
  ]),
  cM('bottom', [
    cE('dots', `
      transform: translateX(-50%);
      bottom: 16px;
      left: 50%;
    `),
    cE('dot', `
      margin-right: 12px;
    `)
  ])
])
