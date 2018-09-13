---
layout: ja/about_abci/software
title: ソフトウェアスタック - ABCIについて | ABCI
permalink: /ja/about_abci/software.html
---


## ソフトウェアスタック
{: .h2 }


### ソフトウェア
{: .h3 }

<div class="lead_text">※ABCIでは、HPC分野で定評のある最先端ミドルウェア、各種並列化コンパイラ、最新のGPU向け開発環境やライブラリ、各種ディープラーニングフレームワークを提供します。</div>

<table class="res_table">
  <tr>
    <th>Operating System</th>
    <td>CentOS<br />RedHat Enterprise Linux</td>
  </tr>
  <tr>
    <th>Job Scheduler</th>
    <td>Univa Grid Engine</td>
  </tr>
  <tr>
    <th>Container Engine</th>
    <td>Docker<br />Singularity</td>
  </tr>
  <tr>
    <th>MPI</th>
    <td>OpenMPI<br />MVAPICH2-GDR<br />MVAPICH2<br />Intel MPI</td>
  </tr>
  <tr>
    <th>Development Tools</th>
    <td>Intel Parallel Studio XE Cluster Edition<br />PGI Professional Edition<br />NVIDIA CUDA SDK<br />GCC, Python, Ruby, R, Java, Scala, Lua, Perl</td>
  </tr>
  <tr>
    <th>Deep Learning</th>
    <td>Caffe, Caffe2, TensorFlow, Theano, Torch, PyTorch, CNTK, MXnet, Chainer, Keras<br />NVIDIA GPU Cloud (NGC)</td>
  </tr>
  <tr>
    <th>Big Data Processing</th>
    <td>Hadoop, Spark</td>
  </tr>
</table>
<br /><br />


### コンテナサポート
{: .h3 }

<h4 class="h4">2つのコンテナエンジンをABCIでサポート</h4>
<div class="c">
<ul class="dot_ul">
<li class="dot">Docker: 最も多くのユーザが利用</li>
<li class="dot">Singularity: ローレンスバークレー国立研究所で開発され、HPC分野での利用が拡大中</li>
</ul>
</div>

<h4 class="h4">コンテナをベースとしたソフトウェアエコシステムの活用</h4>
<div class="c">
<ul class="dot_ul">
<li class="dot">グローバルコミュニティで開発された最新の成果をABCI上で利用</li>
<li class="dot">ABCIで開発したコンテナをグローバルコミュニティへ還元</li>
</ul>
</div>

<h4 class="h4">ABCIに最適化されたコンテナを産総研が開発・提供</h4>
<div class="c">
<ul class="dot_ul">
<li class="dot">開発：　ABCIに最適化されたChainerMN、NNablaをはじめとする分散ディープラーニングフレームワークをコンテナ化</li>
<li class="dot">提供：　ABCIで開発されたコンテナをABCIユーザが大規模データのディープラーニングへ適用</li>
</ul>
</div>

<div class="c">※コンテナとは軽量な仮想化環境の一種。DockerやSingularityは、コンテナをベースとしてソフトウェアの簡便な配布・インストール・実行・再利用を可能にするミドルウェア。</div>
<div align="right"><img src="../../img/about_abci/software/img.jpg"/></div>


