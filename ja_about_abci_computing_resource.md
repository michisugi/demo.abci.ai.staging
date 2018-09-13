---
layout: ja/about_abci/computing_resource
title: 計算資源 - ABCIについて | ABCI
permalink: /ja/about_abci/computing_resource.html
---


## 計算資源
{: .h2 }


<div class="lead_text">ABCIは1088台の計算ノード、10台のマルチプラットフォームノード、22PBの大容量ストレージシステム、ノード間およびストレージシステムを接続する高速なInfiniBandネットワーク、それらを管理するサーバ群とネットワーク機器で構成されます。</div>

<h4 class="h4">□ ABCIシステム概要</h4>
![img1.png](../../img/about_abci/computing/img1.png)
<br />
<br />

<h4 class="h4">□ 計算ノードのブロック図</h4>
<br />
<table class="table">
<tr>
<th colspan="2">FUJITSU PRIMERGY Server（ 2 servers in 2U）</th>
</tr>
<tr>
<td>CPU</td>
<td>Intel Xeon Gold 6148（27.5M Cache, 2.40 GHz, 20 Core）×2</td>
</tr>
<tr>
<td>GPU</td>
<td>NVIDIA Tesla V100（SXM2）×4</td>
</tr>
<tr>
<td>Memory</td>
<td>384GiB</td>
</tr>
<tr>
<td>Local Storage</td>
<td>1.6TB NVMe SSD（Intel SSD DC P4600 u.2）×1</td>
</tr>
<tr>
<td>Interconnect</td>
<td>InfiniBand EDR×2</td>
</tr>
</table>
<br />
![img2.png](../../img/about_abci/computing/img2.png)
<br />


### 特  長
{: .h3 }

<h4 class="h4">□ 計算ノード</h4>
<p class="c">
各計算ノードには2基のIntel Xeon Gold 6148と、SXM2で接続されたNvidia Tesla V100が4基、NVMeで接続された1.6TBのSSD、384GiBメモリが搭載されています。<br />

計算ノードの単体性能は、506 AI-TFLOPSで、人工知能研究の機械学習に必要とされる半精度浮動小数点の演算を1秒間に506兆回行う能力を有します。工学的な科学技術計算で必要とされる倍精度浮動小数点演算おいては、計算ノード単体で34.2 TFLOPSの性能を有します。
</p>

<h4 class="h4">□ 高速なインターコネクト</h4>
<p class="c">計算ノード、マルチプラットフォームノード、インタラクティブノード等のノード群および大容量ストレージシステムは、高速なInfiniBand EDRにより接続されます。1088台の計算ノードは34台ずつ32基のラックに搭載されており、同一ラック内ではフルバイセクションバンド幅で接続されています。32基のラック間はオーバーサブスクリプションバンド幅（1/3帯域）で接続されます。</p>

<h4 class="h4">□ 大容量ストレージ</h4>
<p class="c">AIおよびビッグデータを扱うための大容量ストレージは、22PBの実行領域を有するDDN SFA14KXを3セットで構成されるDDN GRIDScaler上で、GPFSによる高速分散ファイルシステムとして提供されます。</p>

<h4 class="h4">□ 外部接続ネットワーク</h4>
<p class="c">ABCIシステムはSINET-5（100Gbps）に接続しているため、インターネットを経由してABCIシステムに接続できます。ネットワークの経路には高性能なファイアウォール装置 FortiGate 1500Dを配し、安全なネットワーク接続を実現するとともに、アクセスサーバによる2段階の認証を経ることでセキュアな接続を確保します。</p>


