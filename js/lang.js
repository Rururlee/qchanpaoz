
// 文字庫
const langLib = {
    cn: {
        normal: {
            about: '關於Q醬包子饅頭店',
            product: '商品介紹',
            howtoeat: '食用方式',
            shop: '店鋪介紹',
            order: '網路購買',
            top: '回首頁',
            delivery: '運費',
            terms: '特定交易法',
        },
        footer: {
            date: '營業時間：',
            soldout: '9:00～ ※直到完售',
            rest: '公休日：星期日、星期一、例假日',
            name: 'Q醬包子饅頭店',
        },
        index: {
            what: '什麼是包子、饅頭？',
            paozinfo: '「包子」，使用麵粉包著各式各樣的內餡，並蒸製而成的食物。就像是日本有的肉包及豆沙包。',
            mantoinfo: '「饅頭」，與日語中的「まんじゅう」不同，是一種不包內餡蒸製而成的中國風麵包。',
            slogan: '台灣的早餐飲食'
        },
        about: {
            title: '店名由來',
            content: '店名是以台灣書寫形式的「Q醬包子饅頭專門店」而取名。',
            qis: '「Q醬」的「Q」是台灣語，表示彈性和耐嚼的質感，而彈性的通常表示為”QQ"。被可食用的木薯澱粉奶茶和刨冰·豆花上的「粉圓」是「QQ」的代表，台灣有很多「QQ」的食物。因為覺得在日本的包子「QQ」感不夠，想請讓住在日本的人吃「QQ」的台灣的肉包，因而店名放入了。Q字',
            chanis: '「醬」是指辣豆醬、鹹甜醬的甜麵條醬或高級調味XO醬的醬油。我想使用台灣的調味料將台灣當地的風味傳達給客戶，因此我將其添加到店名中。另外，在日本，有時將其稱為「○-chan」作為暱稱，但是當翻譯成台灣語時，則變成「○○醬」，因此也包括了暱稱的含義。'
        },
        product: {
            pdNotice: '※全部為含稅價格',
            reido: '冷凍販售',
            goBuy: '這裡購買',
            nikuman: {
                title: '肉包',
                price: '180日圓',
                priceAll: '1入180日圓(含稅) / 5入800日圓(含稅)',
                content: '推薦商品，滿滿的豬絞肉及肉的美味被凝結在濃厚內餡裡。大份量，但不油膩!!精緻高雅的肉的美味在口中散開。'
            },
            nikumanSpicy: {
                title: '辣肉包',
                price: '190日圓',
                priceAll: '1入190日圓(含稅) / 5入850日圓(含稅)',
                content: '充分豬絞肉使用，以獨特的辣醬製作的肉包。推薦給喜歡吃辣的人！它的特點是肉的味道和適度的辣味。對於那些對普通肉不滿意的人，這種味道是一種習慣。'
            },
            yasaiman: {
                title: '菜包',
                price: '170日圓',
                priceAll: '1入170日圓(含稅) / 5入700日圓(含稅)',
                content: '充分使用新鮮的高麗菜·胡蘿蔔·香菇·冬粉·木耳等配料。蔬菜的甜味和木耳酥脆地口感外，冬粉的濕潤感也是絕配！前所未有的新穎食物菜包！您可以享受到特殊的口感與味道。'
            },
            miniman: {
                title: '小籠包',
                price: '70日圓',
                priceAll: '1入70日圓(含稅) / 10入650日圓(含稅)',
                content: '滿滿的豬絞肉及肉的美味被凝結在濃厚內餡裡。精心挑選的麵粉製成容易吃的小型肉包。'
            },
            taroman: {
                title: '芋頭包',
                price: '130日圓',
                priceAll: '1入130日圓(含稅) / 5入650日圓(含稅)',
                content: '台灣有名芋頭，以蓬鬆光滑的豆沙製成。具有甜味的淡紫色豆沙包在蓬鬆的麵團中。芋頭愛好者必嘗試看看！這是一道特別的點心。'
            },
            manto: {
                title: '白饅頭',
                price: '80日圓',
                priceAll: '1入0日圓(含稅) / 5入400日圓(含稅)',
                content: '帶有簡單口味的白麵包，帶有淡淡的天然酵母和小麥粉味。清蒸蓬鬆，咀嚼越久，味道越好。'
            },
            kuroman: {
                title: '黑糖饅頭',
                price: '90日圓',
                priceAll: '1入90日圓(含稅) / 5入450日圓(含稅)',
                content: '使用沖繩縣生產的大量黑糖製成的黑糖味麵包。您可以享受中度紅糖的甜味和芬芳以及結實的口感。'
            },
            wheatman: {
                title: '全麥饅頭',
                price: '100日圓',
                priceAll: '1入100日圓(含稅) / 5入500日圓(含稅)',
                content: '由全穀物麵粉製成，富含膳食纖維，維生素和礦物質。帶有胚芽的香味和耐嚼的口感，使您感覺飽滿'
            },
            nattuman: {
                title: '黑糖堅果饅頭',
                price: '150日圓',
                priceAll: '1入150日圓(含稅) / 5入750日圓(含稅)',
                content: '以黑糖饅頭混合堅果與乾果而製成。營養價值高的成份和有益於美容的枸杞即適量黑糖一起勾起食慾，堅果香的口感和黑糖饅頭的香甜在口中蔓延'
            },
            ocowa: {
                title: '油飯',
                price: '350日圓',
                priceAll: '1入350日圓(含稅)',
                content: '它被寫為"油飯"，讀為Yeofan。蒸米飯、包括糯米、乾香菇、蝦乾和豬肉。在台灣它被稱為快樂時光的主食，漢字"油飯”往往會給人以油膩膩印象，但是油飯中的"油”是"醬油”的縮寫，其特徵是醬油的調味料 它使用獨特的雞肉醬油，並且蒸製得十分完美，美味得令人驚艷！'
            },
            chicken: {
                title: '醉雞',
                price: '350日圓',
                priceAll: '1入350日圓(含稅)',
                content: '"醉雞"一詞被寫成"Twichy"。日語直譯醉雞!!將雞腿捲成卷並將其浸泡在紹興酒中製成的涼爽雞肉。紹興酒具有微弱的氣味，大量的膠原蛋白！推薦您嘗試看看柔軟而香脆的雞腿肉。'
            },
            scallion: {
                title: '蔥抓餅',
                price: '650日圓',
                priceAll: '5入650日圓(含稅)',
                content: '在台灣小吃攤上很常見，和"蔥油餅"很類似，差別在於蔥油餅表面平整，但是蔥抓餅的形成是將帶有韭菜的麵團，捲成棒狀後再捲成螺旋狀，接著薄薄地捲出來，從而形成多層餅皮。此外，在烘烤時，其特徵是用左右兩把刮刀從左右將其夾在中間，以使空氣進入內部並使其蓬鬆。'
            },
            sausage: {
                title: '香腸',
                price: '700日圓',
                priceAll: '5入700日圓(含稅)',
                content: '在台灣攤位上常見炭火烤的和鐵板燒並與大蒜一起賣的食物。QQ（彈性）多汁又甜美，是台灣主食，與生大蒜一起吃可以使它的味道更好。輕輕在煎鍋上上油，然後用低火將其滾烤，它會變成棕色，香氣會更高。'
            }
        },
        howtoeat: {
            heatupA: '包子與饅頭的加熱方式',
            heatupB: '一品料理的加熱方式',
            notice: '※商品送達後，請儘早放入冰箱或是冷凍庫中',
            deadlineA: '肉包、菜包、芋頭包・・・冷藏保存期限4天、冷凍保存期限1個月',
            deadlineB: '白饅頭、黑糖饅頭、其它饅頭等・・・冷藏保存期限1週、冷凍保存期限1個月',
            eatTittleA: '使用大同電鍋蒸煮',
            eatTittleB: '使用蒸鍋蒸煮',
            eatTittleC: '使用一般鍋子蒸煮',
            eatTittleD: '使用微波爐蒸煮',
            eatTextA: '將一杯水的量倒入電鍋裡，將包子饅頭放在碟子上，再將碟子放在蒸架上，蒸煮直到電源關閉就可以吃了。注意，蒸煮完後不要長時間放在電鍋中，包子和饅頭的表皮會變硬。',
            eatTextB: '用足夠的蒸氣將冷凍包子饅頭放入蒸鍋中，並用中火蒸約15分鐘。如果是解凍後的包子饅頭，請用中火蒸約5分鐘。',
            eatTextC: '把有高度的碗倒著放入加深的鍋，煮超過3公分的水，水燒開後關火，將包子和饅頭放在另一個盤子上，並排放置。當水沸騰時，將裝有包子和饅頭的盤子放在倒著的碗上，用布包住鍋，然後蓋在鍋上。如果是冷凍的包子或饅頭，用中火蒸約15分鐘。',
            eatTextD: '能在短時間內加熱，但不建議這樣做，因為這樣包子及饅頭麵團會變乾且表面會變硬。',
            noticeList: '1.吃多少蒸多少，不要有二次以上回蒸動作。<br>2.蒸好後不要放在電鍋內保溫太久，可以先拿出用保鮮膜包起來避免變硬。<br>3.收到包子饅頭後請冷凍保鮮。',
            chicken: {
                title: '醉雞',
                content: '解凍後，切成約1公分的間隔，並在上面撒上醃製的湯。紹興酒味會去掉，所以小孩子也能享用。'
            },
            ocowa: {
                title: '油飯',
                content: '轉移到另一個容器中，在500瓦的微波爐中包裹並加熱3分鐘20秒。加熱條件會因設備而異，因此請適當調整加熱時間。'
            },
            sausage: {
                title: '香腸',
                content: '在平底鍋上輕輕上油並烘烤，同時在低火下滾動使其焦炭化，散發出更好的香氣。請配大蒜片一起品嚐。'
            }
        },
        shop: {
            address: '地址',
            phone: '電話號碼',
            subway: '日暮里‧舎人線 西新井大師西站…從東口步行約7分',
            restTit: '公休日',
            rest: '星期日、星期一、例假日'
        },
        delivery: {
            title: '運費項目',
            area: '送貨地區',
            size1: '60尺寸',
            size2: '80尺寸',
            size3: '100尺寸',
            size4: '120尺寸',
            kg1: '< 2kg',
            kg2: '< 5kg',
            kg3: '< 10kg',
            kg4: '< 15kg',
        },
        terms: {
            title: '基於特定交易法的記載',
            terms1: {
                title: '販售業者',
                content: 'Q醬包子饅頭店'
            },
            terms2: {
                title: '代表負責人姓名'
            },
            terms3: {
                title: '地址'
            },
            terms4: {
                title: '電話號碼'
            },
            terms5: {
                title: '電話受理時間'
            },
            terms6: {
                title: '郵件地址'
            },
            terms7: {
                title: '主頁網址',
            },
            terms8: {
                title: '販售價格',
                content: '請參照各商品頁。'
            },
            terms9: {
                title: '商品價格以外的必要費用',
                content: '運費(大和運輸的冷凍宅急便。請參照下列運費表。)如果是匯款，則收取匯款手續費。如果是Paypal，則須支付Paypal的手續費(訂單金額X 3.6%+40日圓)。'
            },
            terms10: {
                title: '交貨時間',
                content: '由於是收到訂單才開始製作，因此確認匯款後，最長會在2週以內送出商品。'
            },
            terms11: {
                title: '支付方法',
                content: '銀行、日本郵局轉帳、Paypal。'
            },
            terms12: {
                title: '付款截止日期',
                content: '請於7日內匯款，若7日間沒有付款，該訂單將被取消。'
            },
            terms13: {
                title: '退貨、換貨、取消等',
                content: '不受理退貨或產品發貨後退貨。僅當產品有缺陷時，我們才會換貨。取消僅在訂購後24小時內受理。'
            },
            terms14: {
                title: '退貨截止時間',
                content: '請在產品發貨後7天內與我們聯繫。'
            },
            terms15: {
                title: '退貨運費',
                content: '我們將承擔缺陷產品費用。其餘情況您將承擔費用。'
            }
        }
    },
    jp: {
        normal: {
            about: 'Qちゃん包子饅頭について',
            product: '商品のご案内',
            howtoeat: 'お召し上がり方',
            shop: '店舗のご案内',
            order: '通信販売',
            top: 'トップページ',
            delivery: '送料について',
            terms: '特定商取引法',
        },
        footer: {
            date: '営業時間',
            soldout: '※売切れ次第終了',
            rest: '定休日：日、月、祝',
            name: 'Qちゃん包子饅頭店'
        },
        index: {
            what: '包子、饅頭とは？',
            paozinfo: '｢包子｣は、小麦粉の生地でさまざまな餡を包み，蒸して作ったもののことで、日本では、肉まんやあんまんのことを意味します。',
            mantoinfo: '｢饅頭｣は、日本語読みの｢まんじゅう｣とは違い、餡が入っていない小麦粉で作った中国風蒸しパンのことを意味します。',
            slogan: '台湾の朝ごはん定番です。'
        },
        about: {
            title: '名前の由来',
            content: 'お店の名前は台湾語の表記では、「Q醬包子饅頭專門店」でした。',
            qis: '｢Q醬(Qちゃん)｣ の｢Q｣は、弾力性のあるモチモチした食感を表現する台湾語の言葉で、弾力のあるものはよく｢QQ｣と表現されます。タピオカミルクティーやカキ氷・豆花にトッピングされる｢粉圓｣はまさに｢QQ｣の代表で、台湾には｢QQ｣な食べ物がたくさんあります。 日本で肉まんを食べたときに、｢QQ｣さが足りないと感じましたので、「QQ」な台湾の肉まんを日本に住んでいる人に食べてもらいたいと思い、お店の名前に入れました。',
            chanis: '｢醬(ちゃん)｣は、ピリ辛の豆板醤（トウバンジャン）や、甘辛味噌の甜麺醤（テンメンジャン）、高級調味料のXO醤などで使われているように、醤油やタレを意味します。台湾の調味料を使った台湾現地の味をお客様に届けたいと思い、店名に付けました。また、日本では愛称として「〇〇ちゃん」と呼ぶことがありますが、その表音を台湾語にすると｢〇〇醬｣となりますので、愛称としての意味も込めています。'
        },
        product: {
            pdNotice: '※すべて税込み金額',
            reido: '冷凍販売',
            goBuy: 'ご購入はこちら',
            nikuman: {
                title: '肉まん',
                price: '180円',
                priceAll: '1入￥180(税込) / 5入￥800(税込)',
                content: '豚粗挽き肉たっぷり、肉の旨みが凝縮された濃厚な餡がオススメの肉まん。<br>ボリュームがあるのに、しっとり脂っこくない！！<br>こだわりの生地と上品な肉の旨みが口の中で広がります。'
            },
            nikumanSpicy: {
                title: 'ピリ辛肉まん',
                price: '190円',
                priceAll: '1入￥190(税込) / 5入￥850(税込)',
                content: '豚粗挽き肉たっぷり使用し、独自のピリ辛ソースで仕上げた肉まん。辛い物好きな方にオススメ！肉の旨みとほどよいピリ辛さが特徴です。普通の肉まんでは物足りない方には、クセになる味です。'
            },
            yasaiman: {
                title: '野菜まん',
                price: '170円',
                priceAll: '1入￥170(税込) / 5入￥700(税込)',
                content: '新鮮なキャベツ・ニンジン・しいたけ・きくらげ・春雨等の具材をたっぷり使ったヘルシーな野菜まん。野菜の甘みと、きくらげのコリコリした食感に加え、春雨のしっとり感が相性抜群！今までにない斬新な野菜まん！こだわりの生地と食感が楽しめます。'
            },
            miniman: {
                title: 'ミニ肉まん',
                price: '70日円',
                priceAll: '1入￥70(税込) / 10入￥650(税込)',
                content: '豚粗挽き肉たっぷり、肉の旨みが凝縮された濃厚な餡の肉まん。こだわりの生地を使用し、食べやすいミニサイズにした肉まんです。'
            },
            taroman: {
                title: 'タロ芋まん',
                price: '130円',
                priceAll: '1入￥130(税込) / 5入￥650(税込)',
                content: '台湾で有名なタロ芋を、ふかふかなめらかでもっちりした餡に仕上げたタロ芋まん。<br>薄紫、上品な甘さの餡をふわふわ生地に包みました。<br>芋好きさん必見！ こだわりの一品です。'
            },
            manto: {
                title: '白饅頭',
                price: '80円',
                priceAll: '1入￥80(税込) / 5入￥400(税込)',
                content: 'ほのかに天然酵母と小麦粉が香るシンプルな味を、ほどよい甘さに仕上げた白饅頭。<br>ふかふかに蒸し、噛めば噛むほど味わい深い懐かしい味の饅頭'
            },
            kuroman: {
                title: '黒糖饅頭',
                price: '90円',
                priceAll: '1入￥90(税込) / 5入￥450(税込)',
                content: '沖縄県産の黒糖をふんだんに使用した黒糖味の饅頭。<br>ほどよい黒糖の甘さと香り、もっちりした食感が楽しめる饅頭。'
            },
            wheatman: {
                title: '全粒粉饅頭',
                price: '100円',
                priceAll: '1入￥100(税込) / 5入￥500(税込)',
                content: '食物繊維・ビタミン・ミネラル豊富な全粒粉で作った饅頭。<br>胚芽からくる香ばしい風味と、歯ごたえのある食感で満腹感がある饅頭。'
            },
            nattuman: {
                title: '黒糖ナッツまん',
                price: '150円',
                priceAll: '1入￥150(税込) / 5入￥750(税込)',
                content: '黒糖饅頭にミックスナッツとドライフルーツを贅沢に練り込んで、ふかふかに蒸したナッツまん。<br>栄養価値が高いナッツと美容に良いクコの実が、ほどよい黒糖の甘さと共に食欲をそそります。<br>ナッツの香ばしい食感と黒糖饅頭の甘みが口の中に広がります。'
            },
            ocowa: {
                title: '台湾おこわ(油飯)',
                price: '350円',
                priceAll: '1入￥350(税込)',
                content: '「油飯」と書いてヨーファンと読みます。<br>もち米・乾燥シイタケ・乾エビ・豚肉等の具材と共に蒸したおこわです。台湾では、めでたい日の定番料理として知られています。漢字「油飯」では、どうしてもギトギト油のご飯をイメージする傾向がありますが、油飯の「油」は「醤油」略で、しっかりした醤油の味付けが特徴なおこわです。独自の鶏ガラ醤油ベースで、もっちり蒸し上げ、食材の香り良さに驚く一品です。'
            },
            chicken: {
                title: '酔っ払い鶏',
                price: '350円',
                priceAll: '1入￥350(税込)',
                content: '「酔鶏」と書いてツイチーと読みます。日本語の直訳（酔っ払い鶏）！！<br>鶏モモ肉をロール状に巻いて、紹興酒に漬けこんだ冷製鶏肉料理。<br>紹興酒がほのかに香る。コラーゲンたっぷり！　やわらかくてプリッとしたモモ肉がオススメです。'
            },
            scallion: {
                title: '葱抓餅',
                price: '650円',
                priceAll: '5枚￥650(税込)',
                content: '台湾の屋台でよく見かける「葱抓餅（ツォンジュアビン）」。<br>似たようなもので、「葱油餅（ツォンヨービン）」というものもあります。違いは、葱油餅は平たいままですが、葱抓餅は薄く伸ばした生地にネギを入れて丸めて棒状にし、更にそれを渦巻状の円形にして薄く伸ばすことで、何重もの皮ができるようにしてあります。更に焼く時に2つのヘラで左右から挟むようにして中に空気を入れ、ふわふわにするのが特徴です。'
            },
            sausage: {
                title: '香腸(台湾ソーセージ)',
                price: '700円',
                priceAll: '5入￥700(税込)',
                content: '台湾の屋台でおなじみ、炭焼き、鉄板焼きされて、生のニンニクの塊と一緒に販売されています。QQで(弾力のある)、ジューシーで甘みがあり、生ニンニクをかじりながらと一緒に食べるのが台湾の定番で、風味がさらに良くなります。<br>フライパンに薄く油をひいて、弱火で転がしながら焼くと、焦げ目がついて、香りがいっそう高くなります。'
            }
        },
        howtoeat: {
            heatupA: 'パオズ、マントウの温め方',
            heatupB: '一品料理の温め方',
            notice: '※商品到着後は、すぐに冷蔵庫または冷凍庫に入れてください。',
            deadlineA: '肉まん、野菜まん、芋あんまん・・・冷蔵で4日、冷凍で1ヶ月',
            deadlineB: '肉まん、野菜まん、芋あんまん・・・冷蔵で4日、冷凍で1ヶ月',
            eatTittleA: '大同電鍋で蒸す方法',
            eatTittleB: '蒸し器で蒸す方法',
            eatTittleC: '鍋で蒸す方法',
            eatTittleD: '電子レンジで蒸す方法',
            eatTextA: '電鍋本体に、カップ1杯の水を入れ、肉まんや饅頭を皿の上に置き、その皿を蒸し棚の上に置く。電源が切れるまで蒸せば、食べれる状態になります。注意、蒸した後に長時間電鍋の中に置かないでください。肉まんや饅頭の生地が乾いて表面が硬くなります。',
            eatTextB: '蒸気が十分に出ている状態で、冷凍状態の肉まんや饅頭を蒸し器の中に置き、中火で約15分間蒸してください。解凍した肉まんや饅頭を蒸す場合は、中火で約5分間蒸してください。',
            eatTextC: '深めの鍋に、高さのあるお椀を逆さまに入れます。水を3cmほど張り沸騰するまで、火にかけます。別の平らな皿に肉まんや饅頭を置き並べておきます。お湯が沸騰してきたら、肉まんや饅頭を並べておいた皿を逆さまにしたお椀の上に乗せます。鍋を布巾で包み、鍋の上に被せます。冷凍の場合は、中火で約15分間蒸してください。',
            eatTextD: '短時間で温かくなりますが、肉まんや饅頭の生地が乾いて表面が硬くなるので、お勧めしません。',
            noticeList: '1.食べる分だけ蒸してください。何度も蒸し直さないでください。<br>2.蒸し終わった後、電鍋、蒸し器、鍋などの中に入れたままにしないでください。食べきれずに残った分は、生地の表面が乾燥しないように、ラップで包んでください。<br>3.商品が到着したら、鮮度を保つために冷凍保存してください。',
            chicken: {
                title: '酔っ払い鶏',
                content: '解凍後、約1cm間隔に薄切りにして、漬け汁を上にかけてお召し上がりください。紹興酒のアルコールは飛んでなくなっていますので、お子様でもお召し上がりいただけます。'
            },
            ocowa: {
                title: '台湾風おこわ',
                content: '別の容器に移して、ラップをして電子レンジの500Wで、3分20秒温めてください。機器によって、温まり具合が変化しますので、適宜温め時間の調整をお願いいたします。'
            },
            sausage: {
                title: '香腸(台湾ソーセージ)',
                content: 'フライパンに薄く油を引いて、弱火で転がしながら焼くと、焦げ目がついて、香りが一層良くなります。ニンニクの塊をかじりながら、ご賞味ください。'
            }
        },
        shop: {
            address: '住所',
            phone: '電話番号',
            subway: '日暮里‧舎人線 西新井大師西駅…東口より徒歩7分',
            restTit: '定休日',
            rest: '日曜日、月曜日、祝日'
        },
        delivery: {
            title: '発送料金一覧表',
            area: '配送エリア',
            size1: '60サイズ',
            size2: '80サイズ',
            size3: '100サイズ',
            size4: '120サイズ',
            kg1: '2kgまで',
            kg2: '5kgまで',
            kg3: '10kgまで',
            kg4: '15kgまで',
        },
        terms: {
            title: '特定商取引法に基づく表記',
            terms1: {
                title: '販売業者名',
                content: 'Qちゃん包子饅頭店'
            },
            terms2: {
                title: '代表責任者名',
                content: '李　佳惠'
            },
            terms3: {
                title: '所在地'
            },
            terms4: {
                title: '電話番号'
            },
            terms5: {
                title: '電話受付時間'
            },
            terms6: {
                title: 'メールアドレス'
            },
            terms7: {
                title: 'ホームページURL',
            },
            terms8: {
                title: '販売価格',
                content: '各商品ページをご参照ください。'
            },
            terms9: {
                title: '商品代金以外の必要料金',
                content: '送料（ヤマト運輸のクール宅急便。下記運賃表を参照してください。）振込の場合、振込手数料。Paypalの場合、Paypalの手数料(ご注文金額 X 3.6％ + 40円)。'
            },
            terms10: {
                title: 'お届け時期',
                content: '受注生産のため、入金確認後、最長で2週間以内には商品を発送いたします。'
            },
            terms11: {
                title: 'お支払方法',
                content: '銀行、ゆうちょ振込、Paypal'
            },
            terms12: {
                title: 'お申込みの有効期限',
                content: '7日以内にお願いいたします。7日間入金がない場合は、キャンセルとさせていただきます。'
            },
            terms13: {
                title: '返品・交換・キャンセル等',
                content: '商品発送後の返品・返却等はお受けいたしかねます。商品が不良の場合のみ交換いたします。キャンセルは注文後24時間以内に限り受付いたします。'
            },
            terms14: {
                title: '返品期限',
                content: '商品出荷より7日以内にご連絡下さい。'
            },
            terms15: {
                title: '返品送料',
                content: '不良品の場合は弊社が負担いたします。それ以外はお客様のご負担となります。'
            }
        }
    },
}

// 當前語言
let lang = localStorage.getItem('lang')
if (lang == 'cn') {
    changeChinese()
} else if (lang == 'jp') {
    changeJapanese()
} else {
    changeJapanese()
}

// 中文
function changeChinese() {
    // 設定語言
    localStorage.setItem('lang', 'cn')
    lang = 'cn'
    changeTitle()
    // 關閉漢堡
    $('.fat-nav').fadeOut()
    $('.fat-nav,.hamburger').removeClass('active')

    $('.guide ul li:nth-child(1) a,.sp-guide ul li:nth-child(1) a').html(langLib.cn.normal.top)
    $('.guide ul li:nth-child(3) a,.sp-guide ul li:nth-child(3) a').html(langLib.cn.normal.delivery)
    $('.guide ul li:nth-child(5) a,.sp-guide ul li:nth-child(5) a').html(langLib.cn.normal.terms)
    // footer
    $('.foot-word .date').html(langLib.cn.footer.date)
    $('.foot-word .soldout').html(langLib.cn.footer.soldout)
    $('.foot-word .rest').html(langLib.cn.footer.rest)
    $('.copyright span').html(langLib.cn.footer.name)
    // menu
    $('.mainNav li:nth-child(1) a,.fat-nav ul li:nth-child(1) a').html(langLib.cn.normal.about)
    $('.mainNav li:nth-child(2) a,.fat-nav li:nth-child(2) a').html(langLib.cn.normal.product)
    $('.mainNav li:nth-child(3) a,.fat-nav li:nth-child(3) a').html(langLib.cn.normal.howtoeat)
    $('.mainNav li:nth-child(4) a,.fat-nav li:nth-child(4) a').html(langLib.cn.normal.shop)
    $('.mainNav li:nth-child(5) a,.fat-nav li:nth-child(5) a').html(langLib.cn.normal.order)
    // index
    $('.item-line').html(langLib.cn.index.what)
    $('.ct-word .paoz').html(langLib.cn.index.paozinfo)
    $('.ct-word .manto').html(langLib.cn.index.mantoinfo)
    $('.slogan').html(langLib.cn.index.slogan)
    $('.t-btn').attr('src','./images/t-btn-cn.png')
    // about 
    $('.about-bn .bn-title').html(langLib.cn.normal.about)
    $('.n1').html(langLib.cn.about.title)
    $('.n2').html(langLib.cn.about.content)
    $('.qis').html(langLib.cn.about.qis)
    $('.chanis').html(langLib.cn.about.chanis)
    //product
    $('.product-bn .bn-title').html(langLib.cn.normal.product)
    $('.pd-notice').html(langLib.cn.product.pdNotice)
    $('.reido').html(langLib.cn.product.reido)
    $('.go-buy a').html(langLib.cn.product.goBuy)
    $('.nikuman .box-title,.nikuman .title').html(langLib.cn.product.nikuman.title)
    $('.nikuman .box-content').html(langLib.cn.product.nikuman.content)
    $('.nikuman .price').html(langLib.cn.product.nikuman.priceAll)
    $('.nikuman .cont .price').html(langLib.cn.product.nikuman.price)
    $('.nikumanSpicy .box-title,.nikumanSpicy .title').html(langLib.cn.product.nikumanSpicy.title)
    $('.nikumanSpicy .box-content').html(langLib.cn.product.nikumanSpicy.content)
    $('.nikumanSpicy .price').html(langLib.cn.product.nikumanSpicy.priceAll)
    $('.nikumanSpicy .cont .price').html(langLib.cn.product.nikumanSpicy.price)
    $('.yasaiman .box-title,.yasaiman .title').html(langLib.cn.product.yasaiman.title)
    $('.yasaiman .box-content').html(langLib.cn.product.yasaiman.content)
    $('.yasaiman .price').html(langLib.cn.product.yasaiman.priceAll)
    $('.yasaiman .cont .price').html(langLib.cn.product.yasaiman.price)
    $('.miniman .box-title,.miniman .title').html(langLib.cn.product.miniman.title)
    $('.miniman .box-content').html(langLib.cn.product.miniman.content)
    $('.miniman .price').html(langLib.cn.product.miniman.priceAll)
    $('.miniman .cont .price').html(langLib.cn.product.miniman.price)
    $('.taroman .box-title,.taroman .title').html(langLib.cn.product.taroman.title)
    $('.taroman .box-content').html(langLib.cn.product.taroman.content)
    $('.taroman .price').html(langLib.cn.product.taroman.priceAll)
    $('.taroman .cont .price').html(langLib.cn.product.taroman.price)
    $('.manto .box-title,.manto .title').html(langLib.cn.product.manto.title)
    $('.manto .box-content').html(langLib.cn.product.manto.content)
    $('.manto .price').html(langLib.cn.product.manto.priceAll)
    $('.manto .cont .price').html(langLib.cn.product.manto.price)
    $('.kuroman .box-title,.kuroman .title').html(langLib.cn.product.kuroman.title)
    $('.kuroman .box-content').html(langLib.cn.product.kuroman.content)
    $('.kuroman .price').html(langLib.cn.product.kuroman.priceAll)
    $('.kuroman .cont .price').html(langLib.cn.product.kuroman.price)
    $('.wheatman .box-title,.wheatman .title').html(langLib.cn.product.wheatman.title)
    $('.wheatman .box-content').html(langLib.cn.product.wheatman.content)
    $('.wheatman .price').html(langLib.cn.product.wheatman.priceAll)
    $('.wheatman .cont .price').html(langLib.cn.product.wheatman.price)
    $('.nattuman .box-title,.nattuman .title').html(langLib.cn.product.nattuman.title)
    $('.nattuman .box-content').html(langLib.cn.product.nattuman.content)
    $('.nattuman .price').html(langLib.cn.product.nattuman.priceAll)
    $('.nattuman .cont .price').html(langLib.cn.product.nattuman.price)
    $('.ocowa .box-title,.ocowa .title').html(langLib.cn.product.ocowa.title)
    $('.ocowa .box-content').html(langLib.cn.product.ocowa.content)
    $('.ocowa .price').html(langLib.cn.product.ocowa.priceAll)
    $('.ocowa .cont .price').html(langLib.cn.product.ocowa.price)
    $('.chicken .box-title,.chicken .title').html(langLib.cn.product.chicken.title)
    $('.chicken .box-content').html(langLib.cn.product.chicken.content)
    $('.chicken .price').html(langLib.cn.product.chicken.priceAll)
    $('.chicken .cont .price').html(langLib.cn.product.chicken.price)
    $('.scallion .box-title,.scallion .title').html(langLib.cn.product.scallion.title)
    $('.scallion .box-content').html(langLib.cn.product.scallion.content)
    $('.scallion .price').html(langLib.cn.product.scallion.priceAll)
    $('.scallion .cont .price').html(langLib.cn.product.scallion.price)
    $('.sausage .box-title,.sausage .title').html(langLib.cn.product.sausage.title)
    $('.sausage .box-content').html(langLib.cn.product.sausage.content)
    $('.sausage .price').html(langLib.cn.product.sausage.priceAll)
    $('.sausage .cont .price').html(langLib.cn.product.sausage.price)

    // howtoeat
    $('.howtoeat-bn .bn-title').html(langLib.cn.normal.howtoeat)
    $('.heatupA').html(langLib.cn.howtoeat.heatupA)
    $('.tit-notice').html(langLib.cn.howtoeat.notice)
    $('.deadlineA').html(langLib.cn.howtoeat.deadlineA)
    $('.deadlineB').html(langLib.cn.howtoeat.deadlineB)
    $('.eat-item:nth-child(1) .tool').html(langLib.cn.howtoeat.eatTittleA)
    $('.eat-item:nth-child(2) .tool').html(langLib.cn.howtoeat.eatTittleB)
    $('.eat-item:nth-child(3) .tool').html(langLib.cn.howtoeat.eatTittleC)
    $('.eat-item:nth-child(4) .tool').html(langLib.cn.howtoeat.eatTittleD)
    $('.eatTextA').html(langLib.cn.howtoeat.eatTextA)
    $('.eatTextB').html(langLib.cn.howtoeat.eatTextB)
    $('.eatTextC').html(langLib.cn.howtoeat.eatTextC)
    $('.eatTextD').html(langLib.cn.howtoeat.eatTextD)
    $('.notice').html(langLib.cn.howtoeat.noticeList)
    $('.heatupB').html(langLib.cn.howtoeat.heatupB)
    $('.chicken-title').html(langLib.cn.howtoeat.chicken.title)
    $('.chicken-content').html(langLib.cn.howtoeat.chicken.content)
    $('.ocowa-title').html(langLib.cn.howtoeat.ocowa.title)
    $('.ocowa-content').html(langLib.cn.howtoeat.ocowa.content)
    $('.sausage-title').html(langLib.cn.howtoeat.sausage.title)
    $('.sausage-content').html(langLib.cn.howtoeat.sausage.content)
    // shop
    $('.shop-bn .bn-title').html(langLib.cn.normal.shop)
    $('.sub-shop-title').html(langLib.cn.normal.shop)
    $('.shop-cont dt:nth-child(1)').html(langLib.cn.shop.address)
    $('.shop-cont dt:nth-child(3)').html(langLib.cn.shop.phone)
    $('.shop-cont dt:nth-child(5)').html(langLib.cn.footer.date)
    $('.shop-cont dd:nth-child(6)').html(langLib.cn.footer.soldout)
    $('.shop-cont dt:nth-child(7)').html(langLib.cn.shop.restTit)
    $('.shop-cont dd:nth-child(8)').html(langLib.cn.shop.rest)
    $('.shop-cont dd:nth-child(10)').html(langLib.cn.shop.subway)
    // delivery
    $('.delivery-bn .bn-title').html(langLib.cn.normal.delivery)
    $('.delivery-title').html(langLib.cn.delivery.title)
    $('.table-tit td:nth-child(1)').html(langLib.cn.delivery.area)
    $('.table-tit td:nth-child(2)').html(langLib.cn.delivery.size1)
    $('.table-tit td:nth-child(3)').html(langLib.cn.delivery.size2)
    $('.table-tit td:nth-child(4)').html(langLib.cn.delivery.size3)
    $('.table-tit td:nth-child(5)').html(langLib.cn.delivery.size4)
    $('.table-tit2 td:nth-child(1)').html(langLib.cn.delivery.kg1)
    $('.table-tit2 td:nth-child(2)').html(langLib.cn.delivery.kg2)
    $('.table-tit2 td:nth-child(3)').html(langLib.cn.delivery.kg3)
    $('.table-tit2 td:nth-child(4)').html(langLib.cn.delivery.kg4)
    // terms
    $('.terms-bn .bn-title').html(langLib.cn.normal.terms)
    $('.terms-title').html(langLib.cn.terms.title)
    $('.terms1 dt').html(langLib.cn.terms.terms1.title)
    $('.terms1 dd').html(langLib.cn.terms.terms1.content)
    $('.terms2 dt').html(langLib.cn.terms.terms2.title)
    $('.terms3 dt').html(langLib.cn.terms.terms3.title)
    $('.terms4 dt').html(langLib.cn.terms.terms4.title)
    $('.terms5 dt').html(langLib.cn.terms.terms5.title)
    $('.terms6 dt').html(langLib.cn.terms.terms6.title)
    $('.terms7 dt').html(langLib.cn.terms.terms7.title)
    $('.terms8 dt').html(langLib.cn.terms.terms8.title)
    $('.terms8 dd').html(langLib.cn.terms.terms8.content)
    $('.terms9 dt').html(langLib.cn.terms.terms9.title)
    $('.terms9 dd').html(langLib.cn.terms.terms9.content)
    $('.terms10 dt').html(langLib.cn.terms.terms10.title)
    $('.terms10 dd').html(langLib.cn.terms.terms10.content)
    $('.terms11 dt').html(langLib.cn.terms.terms11.title)
    $('.terms11 dd').html(langLib.cn.terms.terms11.content)
    $('.terms12 dt').html(langLib.cn.terms.terms12.title)
    $('.terms12 dd').html(langLib.cn.terms.terms12.content)
    $('.terms13 dt').html(langLib.cn.terms.terms13.title)
    $('.terms13 dd').html(langLib.cn.terms.terms13.content)
    $('.terms14 dt').html(langLib.cn.terms.terms14.title)
    $('.terms14 dd').html(langLib.cn.terms.terms14.content)
    $('.terms15 dt').html(langLib.cn.terms.terms15.title)
    $('.terms15 dd').html(langLib.cn.terms.terms15.content)
}

// 日文
function changeJapanese() {
    // 設定語言
    localStorage.setItem('lang', 'jp')
    lang = 'jp'
    changeTitle()
    // 關閉漢堡
    $('.fat-nav').fadeOut()
    $('.fat-nav,.hamburger').removeClass('active')

    $('.guide ul li:nth-child(1) a,.sp-guide ul li:nth-child(1) a').html(langLib.jp.normal.top)
    $('.guide ul li:nth-child(3) a,.sp-guide ul li:nth-child(3) a').html(langLib.jp.normal.delivery)
    $('.guide ul li:nth-child(5) a,.sp-guide ul li:nth-child(5) a').html(langLib.jp.normal.terms)
    // footer
    $('.foot-word .date').html(langLib.jp.footer.date)
    $('.foot-word .soldout').html(langLib.jp.footer.soldout)
    $('.foot-word .rest').html(langLib.jp.footer.rest)
    $('.copyright span').html(langLib.jp.footer.name)
    // menu
    $('.mainNav li:nth-child(1) a,.fat-nav li:nth-child(1) a').html(langLib.jp.normal.about)
    $('.mainNav li:nth-child(2) a,.fat-nav li:nth-child(2) a').html(langLib.jp.normal.product)
    $('.mainNav li:nth-child(3) a,.fat-nav li:nth-child(3) a').html(langLib.jp.normal.howtoeat)
    $('.mainNav li:nth-child(4) a,.fat-nav li:nth-child(4) a').html(langLib.jp.normal.shop)
    $('.mainNav li:nth-child(5) a,.fat-nav li:nth-child(5) a').html(langLib.jp.normal.order)
    // index
    $('.item-line').html(langLib.jp.index.what)
    $('.ct-word .paoz').html(langLib.jp.index.paozinfo)
    $('.ct-word .manto').html(langLib.jp.index.mantoinfo)
    $('.slogan').html(langLib.jp.index.slogan)
    $('.t-btn').attr('src','./images/t-btn.png')
    // about 
    $('.about-bn .bn-title').html(langLib.jp.normal.about)
    $('.n1').html(langLib.jp.about.title)
    $('.n2').html(langLib.jp.about.content)
    $('.qis').html(langLib.jp.about.qis)
    $('.chanis').html(langLib.jp.about.chanis)
    //product
    $('.product-bn .bn-title').html(langLib.jp.normal.product)
    $('.pd-notice').html(langLib.jp.product.pdNotice)
    $('.reido').html(langLib.jp.product.reido)
    $('.go-buy a').html(langLib.jp.product.goBuy)
    $('.nikuman .box-title,.nikuman .title').html(langLib.jp.product.nikuman.title)
    $('.nikuman .box-content').html(langLib.jp.product.nikuman.content)
    $('.nikuman .price').html(langLib.jp.product.nikuman.priceAll)
    $('.nikuman .cont .price').html(langLib.jp.product.nikuman.price)
    $('.nikumanSpicy .box-title,.nikumanSpicy .title').html(langLib.jp.product.nikumanSpicy.title)
    $('.nikumanSpicy .box-content').html(langLib.jp.product.nikumanSpicy.content)
    $('.nikumanSpicy .price').html(langLib.jp.product.nikumanSpicy.priceAll)
    $('.nikumanSpicy .cont .price').html(langLib.jp.product.nikumanSpicy.price)
    $('.yasaiman .box-title,.yasaiman .title').html(langLib.jp.product.yasaiman.title)
    $('.yasaiman .box-content').html(langLib.jp.product.yasaiman.content)
    $('.yasaiman .price').html(langLib.jp.product.yasaiman.priceAll)
    $('.yasaiman .cont .price').html(langLib.jp.product.yasaiman.price)
    $('.miniman .box-title,.miniman .title').html(langLib.jp.product.miniman.title)
    $('.miniman .box-content').html(langLib.jp.product.miniman.content)
    $('.miniman .price').html(langLib.jp.product.miniman.priceAll)
    $('.miniman .cont .price').html(langLib.jp.product.miniman.price)
    $('.taroman .box-title,.taroman .title').html(langLib.jp.product.taroman.title)
    $('.taroman .box-content').html(langLib.jp.product.taroman.content)
    $('.taroman .price').html(langLib.jp.product.taroman.priceAll)
    $('.taroman .cont .price').html(langLib.jp.product.taroman.price)
    $('.manto .box-title,.manto .title').html(langLib.jp.product.manto.title)
    $('.manto .box-content').html(langLib.jp.product.manto.content)
    $('.manto .price').html(langLib.jp.product.manto.priceAll)
    $('.manto .cont .price').html(langLib.jp.product.manto.price)
    $('.kuroman .box-title,.kuroman .title').html(langLib.jp.product.kuroman.title)
    $('.kuroman .box-content').html(langLib.jp.product.kuroman.content)
    $('.kuroman .price').html(langLib.jp.product.kuroman.priceAll)
    $('.kuroman .cont .price').html(langLib.jp.product.kuroman.price)
    $('.wheatman .box-title,.wheatman .title').html(langLib.jp.product.wheatman.title)
    $('.wheatman .box-content').html(langLib.jp.product.wheatman.content)
    $('.wheatman .price').html(langLib.jp.product.wheatman.priceAll)
    $('.wheatman .cont .price').html(langLib.jp.product.wheatman.price)
    $('.nattuman .box-title,.nattuman .title').html(langLib.jp.product.nattuman.title)
    $('.nattuman .box-content').html(langLib.jp.product.nattuman.content)
    $('.nattuman .price').html(langLib.jp.product.nattuman.priceAll)
    $('.nattuman .cont .price').html(langLib.jp.product.nattuman.price)
    $('.ocowa .box-title,.ocowa .title').html(langLib.jp.product.ocowa.title)
    $('.ocowa .box-content').html(langLib.jp.product.ocowa.content)
    $('.ocowa .price').html(langLib.jp.product.ocowa.priceAll)
    $('.ocowa .cont .price').html(langLib.jp.product.ocowa.price)
    $('.chicken .box-title,.chicken .title').html(langLib.jp.product.chicken.title)
    $('.chicken .box-content').html(langLib.jp.product.chicken.content)
    $('.chicken .price').html(langLib.jp.product.chicken.priceAll)
    $('.chicken .cont .price').html(langLib.jp.product.chicken.price)
    $('.scallion .box-title,.scallion .title').html(langLib.jp.product.scallion.title)
    $('.scallion .box-content').html(langLib.jp.product.scallion.content)
    $('.scallion .price').html(langLib.jp.product.scallion.priceAll)
    $('.scallion .cont .price').html(langLib.jp.product.scallion.price)
    $('.sausage .box-title,.sausage .title').html(langLib.jp.product.sausage.title)
    $('.sausage .box-content').html(langLib.jp.product.sausage.content)
    $('.sausage .price').html(langLib.jp.product.sausage.priceAll)
    $('.sausage .cont .price').html(langLib.jp.product.sausage.price)

    // howtoeat
    $('.howtoeat-bn .bn-title').html(langLib.jp.normal.howtoeat)
    $('.heatupA').html(langLib.jp.howtoeat.heatupA)
    $('.tit-notice').html(langLib.jp.howtoeat.notice)
    $('.deadlineA').html(langLib.jp.howtoeat.deadlineA)
    $('.deadlineB').html(langLib.jp.howtoeat.deadlineB)
    $('.eat-item:nth-child(1) .tool').html(langLib.jp.howtoeat.eatTittleA)
    $('.eat-item:nth-child(2) .tool').html(langLib.jp.howtoeat.eatTittleB)
    $('.eat-item:nth-child(3) .tool').html(langLib.jp.howtoeat.eatTittleC)
    $('.eat-item:nth-child(4) .tool').html(langLib.jp.howtoeat.eatTittleD)
    $('.eatTextA').html(langLib.jp.howtoeat.eatTextA)
    $('.eatTextB').html(langLib.jp.howtoeat.eatTextB)
    $('.eatTextC').html(langLib.jp.howtoeat.eatTextC)
    $('.eatTextD').html(langLib.jp.howtoeat.eatTextD)
    $('.notice').html(langLib.jp.howtoeat.noticeList)
    $('.heatupB').html(langLib.jp.howtoeat.heatupB)
    $('.chicken-title').html(langLib.jp.howtoeat.chicken.title)
    $('.chicken-content').html(langLib.jp.howtoeat.chicken.content)
    $('.ocowa-title').html(langLib.jp.howtoeat.ocowa.title)
    $('.ocowa-content').html(langLib.jp.howtoeat.ocowa.content)
    $('.sausage-title').html(langLib.jp.howtoeat.sausage.title)
    $('.sausage-content').html(langLib.jp.howtoeat.sausage.content)
    // shop
    $('.shop-bn .bn-title').html(langLib.jp.normal.shop)
    $('.sub-shop-title').html(langLib.jp.normal.shop)
    $('.shop-cont dt:nth-child(1)').html(langLib.jp.shop.address)
    $('.shop-cont dt:nth-child(3)').html(langLib.jp.shop.phone)
    $('.shop-cont dt:nth-child(5)').html(langLib.jp.footer.date)
    $('.shop-cont dd:nth-child(6)').html(langLib.jp.footer.soldout)
    $('.shop-cont dt:nth-child(7)').html(langLib.jp.shop.restTit)
    $('.shop-cont dd:nth-child(8)').html(langLib.jp.shop.rest)
    $('.shop-cont dd:nth-child(10)').html(langLib.jp.shop.subway)
    // delivery
    $('.delivery-bn .bn-title').html(langLib.jp.normal.delivery)
    $('.delivery-title').html(langLib.jp.delivery.title)
    $('.table-tit td:nth-child(1)').html(langLib.jp.delivery.area)
    $('.table-tit td:nth-child(2)').html(langLib.jp.delivery.size1)
    $('.table-tit td:nth-child(3)').html(langLib.jp.delivery.size2)
    $('.table-tit td:nth-child(4)').html(langLib.jp.delivery.size3)
    $('.table-tit td:nth-child(5)').html(langLib.jp.delivery.size4)
    $('.table-tit2 td:nth-child(1)').html(langLib.jp.delivery.kg1)
    $('.table-tit2 td:nth-child(2)').html(langLib.jp.delivery.kg2)
    $('.table-tit2 td:nth-child(3)').html(langLib.jp.delivery.kg3)
    $('.table-tit2 td:nth-child(4)').html(langLib.jp.delivery.kg4)
    // terms
    $('.terms-bn .bn-title').html(langLib.jp.normal.terms)
    $('.terms-title').html(langLib.jp.terms.title)
    $('.terms1 dt').html(langLib.jp.terms.terms1.title)
    $('.terms1 dd').html(langLib.jp.terms.terms1.content)
    $('.terms2 dt').html(langLib.jp.terms.terms2.title)
    $('.terms3 dt').html(langLib.jp.terms.terms3.title)
    $('.terms4 dt').html(langLib.jp.terms.terms4.title)
    $('.terms5 dt').html(langLib.jp.terms.terms5.title)
    $('.terms6 dt').html(langLib.jp.terms.terms6.title)
    $('.terms7 dt').html(langLib.jp.terms.terms7.title)
    $('.terms8 dt').html(langLib.jp.terms.terms8.title)
    $('.terms8 dd').html(langLib.jp.terms.terms8.content)
    $('.terms9 dt').html(langLib.jp.terms.terms9.title)
    $('.terms9 dd').html(langLib.jp.terms.terms9.content)
    $('.terms10 dt').html(langLib.jp.terms.terms10.title)
    $('.terms10 dd').html(langLib.jp.terms.terms10.content)
    $('.terms11 dt').html(langLib.jp.terms.terms11.title)
    $('.terms11 dd').html(langLib.jp.terms.terms11.content)
    $('.terms12 dt').html(langLib.jp.terms.terms12.title)
    $('.terms12 dd').html(langLib.jp.terms.terms12.content)
    $('.terms13 dt').html(langLib.jp.terms.terms13.title)
    $('.terms13 dd').html(langLib.jp.terms.terms13.content)
    $('.terms14 dt').html(langLib.jp.terms.terms14.title)
    $('.terms14 dd').html(langLib.jp.terms.terms14.content)
    $('.terms15 dt').html(langLib.jp.terms.terms15.title)
    $('.terms15 dd').html(langLib.jp.terms.terms15.content)
}


function changeTitle() {
    // 抓到網址
    let url = new URL(window.location.href);
    let pathname = url.pathname.split('/')[2]
    console.log(lang)
    if (lang == 'cn') {
        switch (pathname) {
            case '':
                document.title = 'Q醬包子饅頭店'
                break;
            case 'index.html':
                document.title = 'Q醬包子饅頭店'
                break;
            case 'about.html':
                document.title = '關於Q醬包子饅頭店 | Q醬包子饅頭店'
                break;
            case 'product.html':
                document.title = '商品介紹 | Q醬包子饅頭店'
                break;
            case 'howtoeat.html':
                document.title = '食用方式 | Q醬包子饅頭店'
                break;
            case 'shop.html':
                document.title = '店鋪介紹 | Q醬包子饅頭店'
                break;
            case 'order.html':
                document.title = '網路購買 | Q醬包子饅頭店'
                break;
            case 'delivery.html':
                document.title = '運費 | Q醬包子饅頭店'
                break;
            case 'terms.html':
                document.title = '特定交易法 | Q醬包子饅頭店'
                break;
        }
    } else {
        switch (pathname) {
            case '':
                document.title = 'Qちゃん包子饅頭店'
                break;
            case 'index.html':
                document.title = 'Qちゃん包子饅頭店'
                break;
            case 'about.html':
                document.title = 'Qちゃん包子饅頭について | Q醬包子饅頭店'
                break;
            case 'product.html':
                document.title = '商品のご案内 | Q醬包子饅頭店'
                break;
            case 'howtoeat.html':
                document.title = 'お召し上がり方 | Q醬包子饅頭店'
                break;
            case 'shop.html':
                document.title = '店舗のご案内 | Q醬包子饅頭店'
                break;
            case 'order.html':
                document.title = '通信販売 | Q醬包子饅頭店'
                break;
            case 'delivery.html':
                document.title = '送料について | Q醬包子饅頭店'
                break;
            case 'terms.html':
                document.title = '特定商取引法 | Q醬包子饅頭店'
                break;
        }
    }
}