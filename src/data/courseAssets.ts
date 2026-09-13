const base = '/assets/visual-math';

export const courseAssets = {
  characters: {
    ava: `${base}/characters/ava.png`,
    ben: `${base}/characters/ben.png`,
    boyNormal: `${base}/characters/boy-01-normal.png`,
    boyPointing: `${base}/characters/boy-02-pointing.png`,
    boyThinking: `${base}/characters/boy-03-thinking.png`,
    boySurprise: `${base}/characters/boy-04-surprise.png`,
    boyHappy: `${base}/characters/boy-05-happy.png`,
    boyCelebrating: `${base}/characters/boy-06-celebrating.png`,
    girlNormal: `${base}/characters/girl-01-normal.png`,
    girlPointing: `${base}/characters/girl-02-pointing.png`,
    girlThinking: `${base}/characters/girl-03-thinking.png`,
    girlSurprise: `${base}/characters/girl-04-surprise.png`,
    girlHappy: `${base}/characters/girl-05-happy.png`,
    girlCelebrating: `${base}/characters/girl-06-celebrating.png`
  },
  objects: {
    adultTicket: `${base}/objects/adult-ticket.png`,
    apple: `${base}/objects/apple.png`,
    basketball: `${base}/objects/basketball.png`,
    booksStack: `${base}/objects/books-stack.png`,
    candy: `${base}/objects/candy.png`,
    childTicket: `${base}/objects/child-ticket.png`,
    coins: `${base}/objects/coins.png`,
    cookie: `${base}/objects/cookie.png`,
    crayonBlue: `${base}/objects/crayon-blue.png`,
    crayonYellow: `${base}/objects/crayon-yellow.png`,
    cupcake: `${base}/objects/cupcake.png`,
    dice: `${base}/objects/dice.png`,
    dollarBill: `${base}/objects/dollar-bill.png`,
    eraser: `${base}/objects/eraser.png`,
    flourCup: `${base}/objects/flour-cup.png`,
    gameController: `${base}/objects/game-controller.png`,
    giftBox: `${base}/objects/gift-box.png`,
    hat: `${base}/objects/hat.png`,
    milk: `${base}/objects/milk.png`,
    notebook: `${base}/objects/notebook.png`,
    openBook: `${base}/objects/open-book.png`,
    pencil: `${base}/objects/pencil.png`,
    shirt: `${base}/objects/shirt.png`,
    shoppingBag: `${base}/objects/shopping-bag.png`,
    smoothieCup: `${base}/objects/smoothie-cup.png`,
    soccerBall: `${base}/objects/soccer-ball.png`,
    strawberry: `${base}/objects/strawberry.png`,
    sugarCup: `${base}/objects/sugar-cup.png`,
    ticket: `${base}/objects/ticket.png`,
    toyBlockBlue: `${base}/objects/toy-block-blue.png`
  },
  levelVisuals: {
    bar2Blue: `${base}/level-visuals/bar-2-blue.png`,
    bar2Yellow: `${base}/level-visuals/bar-2-yellow.png`,
    bar3Blue: `${base}/level-visuals/bar-3-blue.png`,
    bar4Yellow: `${base}/level-visuals/bar-4-yellow.png`,
    blockBlue: `${base}/level-visuals/block-blue.png`,
    blockYellow: `${base}/level-visuals/block-yellow.png`,
    connectedPieces: `${base}/level-visuals/connected-pieces.png`,
    hiddenLocked: `${base}/level-visuals/hidden-locked.png`,
    hiddenUnlocked: `${base}/level-visuals/hidden-unlocked.png`,
    logicNodes: `${base}/level-visuals/logic-nodes.png`,
    magnifyingGlass: `${base}/level-visuals/magnifying-glass.png`,
    trophy: `${base}/level-visuals/trophy.png`
  },
  feedback: {
    attention: `${base}/feedback/attention.png`,
    correct: `${base}/feedback/correct.png`,
    hint: `${base}/feedback/hint.png`,
    incorrect: `${base}/feedback/incorrect.png`,
    more: `${base}/feedback/more.png`,
    question: `${base}/feedback/question.png`,
    star: `${base}/feedback/star.png`
  }
} as const;

export type CourseAssets = typeof courseAssets;
